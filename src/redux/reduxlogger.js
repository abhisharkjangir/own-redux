const reduxLogger = (store) => (next) => (action) => {
  // console.group(action.type);
  // console.info("dispatching", action);
  const s = store.getState();
  next(s);
  // console.log("next state", result);
  console.groupEnd();
  return store.getState();
};

export default reduxLogger;
