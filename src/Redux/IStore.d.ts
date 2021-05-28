// #region Interface Imports
import { IHomePage, ILogin, IAccessCode } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    accessCode: IAccessCode.IStateProps;
    login: ILogin.IStateProps;
    home: IHomePage.IStateProps;
}
