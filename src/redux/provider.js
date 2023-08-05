import React, { useContext } from "react";
export const ReduxContext = React.createContext();

export const useReduxContext = () => useContext(ReduxContext);

const ReduxProvider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

export default ReduxProvider;
