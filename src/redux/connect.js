import { useEffect, useState } from "react";
import { ReduxContext } from "./provider";

const isFunction = (param) => typeof param === "function";

const connect = (mapStateToPrpos, mapDispatchToProps) => (Component) => {
  const ConnectComponent = ({ store, ...restProps }) => {
    const { dispatch, getState, subscribe } = store;

    // ReRendering logic on Redux State Change
    // we can use useSelector hook here like -> useSelctor(() => {})
    const [, ReRender] = useState();
    useEffect(() => {
      subscribe((state) => {
        ReRender({ ...state });
      });
    }, [subscribe]);

    const state = getState();

    const stateProps = isFunction(mapStateToPrpos)
      ? mapStateToPrpos(state)
      : {};
    const dispatchProps = isFunction(mapDispatchToProps)
      ? mapDispatchToProps(dispatch, state)
      : {};

    return <Component {...restProps} {...stateProps} {...dispatchProps} />;
  };

  return (props) => (
    <ReduxContext.Consumer>
      {(store) => <ConnectComponent {...props} store={store} />}
    </ReduxContext.Consumer>
  );
};

export default connect;
