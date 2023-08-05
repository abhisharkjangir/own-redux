const createStore = (rootReducer, intialState, middlewares) => {
  let state = intialState ?? {};
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = rootReducer(state, action);
    listeners.forEach((listener) => listener(state));
    return state;
  };

  const subscribe = (fn) => {
    listeners.push(fn);
  };

  // To set initial state for each reducer
  dispatch({});

  return {
    dispatch,
    getState,
    subscribe,
  };
};

export default createStore;
