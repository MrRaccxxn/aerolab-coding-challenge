import { combineReducers } from "redux";
import { LoaderReducer } from "./reducers/loader/loader.reducer";
import { ProductReducer } from "./reducers/product/product.reducer";
import { UserReducer } from "./reducers/user/user.reducer";

const rootReducer = combineReducers({
  UserReducer,
  ProductReducer,
  LoaderReducer,
});

export default rootReducer;
