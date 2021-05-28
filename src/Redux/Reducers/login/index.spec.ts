// #region Local Imports
import { IAction, ILogin } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { LoginReducer } from ".";
// #endregion Local Imports

describe("Login reducer", () => {
    it("should return the initial state", () => {
        expect(LoginReducer(
            undefined,
            {} as IAction<ILogin.IStateProps>)
        ).toEqual({});
    });
});
