import connect from "./redux/connect";

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INC": {
      return state + 1;
    }

    case "DEC": {
      return state - 1;
    }

    default:
      return state;
  }
};

const Counter = ({ count, inc, dec }) => {
  return (
    <div className="counter">
      <p>Counter using "connect" method</p>
      <h1>{count}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.counter };
};

const mapDispatchToProps = (dispatch, state) => ({
  inc: () => dispatch({ type: "INC" }),
  dec: () => {
    if (state.counter > 0) {
      dispatch({ type: "DEC" });
    } else {
      console.warn("Opps!");
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
