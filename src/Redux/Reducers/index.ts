// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { LoginReducer } from "./login";
import { AccessCodeReducer } from "./accessCode";
import { PasswordReducer } from "./password";
import { RegistrationReducer } from "./registration";
// #endregion Local Imports

export default combineReducers({
    registration: RegistrationReducer,
    password: PasswordReducer,
    accessCode: AccessCodeReducer,
    login: LoginReducer,
    home: HomeReducer,
});
