import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

// Combine all reducers here
const rootReducer = combineReducers({
  product: productReducer, // State for products
});

export default rootReducer;
