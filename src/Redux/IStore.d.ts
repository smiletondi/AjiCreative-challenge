// #region Interface Imports
import { IHomePage, ILogin, IAccessCode, IPassword, IRegistration } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    registration: IRegistration.IStateProps;
    password: IPassword.IStateProps;
    accessCode: IAccessCode.IStateProps;
    login: ILogin.IStateProps;
    home: IHomePage.IStateProps;
}
