import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(thunk), autoRehydrate())
);

persistStore(store);
