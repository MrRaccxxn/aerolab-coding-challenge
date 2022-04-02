import { combineReducers } from "redux";
import { LoaderReducer } from "./reducers/loader/loader.reducer";
import { UserReducer } from "./reducers/user/user.reducer";

const rootReducer = combineReducers({
  UserReducer,
  LoaderReducer,
});

export default rootReducer;
