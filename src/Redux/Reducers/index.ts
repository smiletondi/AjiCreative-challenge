// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { LoginReducer } from "./login";
// #endregion Local Imports

export default combineReducers({
    login: LoginReducer,
    home: HomeReducer,
});
