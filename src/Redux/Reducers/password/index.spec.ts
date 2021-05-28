// #region Local Imports
import { IAction, IPassword } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { PasswordReducer } from ".";
// #endregion Local Imports

describe("Password reducer", () => {
    it("should return the initial state", () => {
        expect(PasswordReducer(
            undefined,
            {} as IAction<IPassword.IStateProps>)
        ).toEqual({});
    });
});
