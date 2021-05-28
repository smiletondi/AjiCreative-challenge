// #region Interface Imports
import { IHomePage, ILogin } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    login: ILogin.IStateProps;
    home: IHomePage.IStateProps;
}
