import { combineReducers } from "redux";
import { LoaderReducer } from "./reducers/loader/loader.reducer";
import { ProductReducer } from "./reducers/product/product.reducer";
import { ToastReducer } from "./reducers/toast/toast.reducer";
import { UserReducer } from "./reducers/user/user.reducer";

const rootReducer = combineReducers({
  UserReducer,
  ProductReducer,
  LoaderReducer,
  ToastReducer,
});

export default rootReducer;
