// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { LoginReducer } from "./login";
import { AccessCodeReducer } from "./accessCode";
// #endregion Local Imports

export default combineReducers({
    accessCode: AccessCodeReducer,
    login: LoginReducer,
    home: HomeReducer,
});
