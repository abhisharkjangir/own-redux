import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { asyncCounterReducer } from "./AsyncCounter";
import { counterReducer } from "./counter";
import { counterHookReducer } from "./CounterUsingHooks";
import combineReducers from "./redux/combineReducers";
import ReduxProvider from "./redux/provider";
import reduxLogger from "./redux/reduxlogger";
import createStore from "./redux/store";
import reduxThunk from "./redux/thunk";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const rootReducer = combineReducers({
  counter: counterReducer,
  counterHook: counterHookReducer,
  asyncCounter: asyncCounterReducer
});

const store = createStore(rootReducer, {}, []);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>
);
