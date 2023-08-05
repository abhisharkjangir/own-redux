const compose = (...args) => {
  return (store) => {
    return (next) => {
      return (action) => {
        return args[0].reduce((acc, fn) => {
          return fn(acc)(next)(action);
        }, store);
      };
    };
  };
};

const createStore = (rootReducer, intialState, middlewares) => {
  let state = intialState ?? {};
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    const next = (state) => {
      let updatedState = rootReducer(state, action);
      listeners.forEach((listener) => listener(updatedState));
      return updatedState;
    };

    if (middlewares.length) {
      let updatedState = compose(middlewares)({ dispatch, getState })(next)(
        action
      );
      console.log(">>>", updatedState);

      state = next(updatedState);
    } else {
      state = next(state);
    }
  };

  const subscribe = (fn) => {
    listeners.push(fn);
  };

  // To set initial state for each reducer
  dispatch({});

  return {
    dispatch,
    getState,
    subscribe
  };
};

export default createStore;
