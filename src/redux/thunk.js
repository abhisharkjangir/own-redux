const reduxThunk = (state) => (next) => (action) => {
  if (typeof action === "function") {
    action(dispatch);
  }
  return next(state);
};

export default reduxThunk;
