// #region Interface Imports
import { IHomePage, ILogin, IAccessCode, IPassword } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    password: IPassword.IStateProps;
    accessCode: IAccessCode.IStateProps;
    login: ILogin.IStateProps;
    home: IHomePage.IStateProps;
}
