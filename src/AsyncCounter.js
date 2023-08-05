import useDispatch from "./redux/useDispatch";
import useSelector from "./redux/useSelector";

export const asyncCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INC_ASYNC": {
      return state + 1;
    }

    case "DEC_ASYNC": {
      return state - 1;
    }

    default:
      return state;
  }
};
const AsyncCounter = () => {
  const count = useSelector((state) => state.asyncCounter);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch((dispatch) => {
      console.log(dispatch);

      setTimeout(() => {
        dispatch({ type: "DEC_ASYNC" });
      }, 1000);
    });
  };

  const dec = () => {
    if (count > 0) dispatch({ type: "DEC_ASYNC" });
    else console.warn("Oops!");
  };
  return (
    <div className="counter">
      <p>Async Counter</p>
      <h1>{count}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
    </div>
  );
};

export default AsyncCounter;
