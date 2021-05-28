// #region Local Imports
import { IAction, IAccessCode } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { AccessCodeReducer } from ".";
// #endregion Local Imports

describe("AccessCode reducer", () => {
    it("should return the initial state", () => {
        expect(AccessCodeReducer(
            undefined,
            {} as IAction<IAccessCode.IStateProps>)
        ).toEqual({});
    });
});
