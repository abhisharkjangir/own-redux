// {key: fn<state, action>}
const combineReducers = (reducers) => {
  let nextState = {};
  const reducerKeys = Object.keys(reducers);
  return (state = {}, action) => {
    reducerKeys.forEach((reducerKey) => {
      const reducer = reducers[reducerKey];
      nextState[reducerKey] = reducer(state[reducerKey], action);
    });
    return nextState;
  };
};

export default combineReducers;
