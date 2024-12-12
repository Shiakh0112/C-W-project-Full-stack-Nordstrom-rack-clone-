import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./reducers/rootReducer";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

// Create the store with middleware for async actions (redux-thunk)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
