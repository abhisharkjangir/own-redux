import useSelector from "./redux/useSelector";
import useDispatch from "./redux/useDispatch";

export const counterHookReducer = (state = 0, action) => {
  switch (action.type) {
    case "INC_HOOK": {
      return state + 1;
    }

    case "DEC_HOOK": {
      return state - 1;
    }

    default:
      return state;
  }
};

const CounterUsingHooks = () => {
  const count = useSelector((state) => state.counterHook);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch({ type: "INC_HOOK" });
  };

  const dec = () => {
    if (count > 0) dispatch({ type: "DEC_HOOK" });
    else console.warn("Oops!");
  };

  return (
    <div className="counter">
      <p>Counter using "useSelector" & "useDispatch" hook</p>
      <h1>{count}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
    </div>
  );
};

export default CounterUsingHooks;
