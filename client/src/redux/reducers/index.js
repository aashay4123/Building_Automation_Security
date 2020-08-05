import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dashReducer from "./dashboardRed";

export default combineReducers({
  auth: authReducer,
  dash: dashReducer,
});
