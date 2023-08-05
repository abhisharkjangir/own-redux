import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { counterReducer } from "./counter";
import { counterHookReducer } from "./CounterUsingHooks";
import combineReducers from "./redux/combineReducers";
import ReduxProvider from "./redux/provider";
import createStore from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const rootReducer = combineReducers({
  counter: counterReducer,
  counterHook: counterHookReducer,
});

const store = createStore(rootReducer, {});

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>
);
