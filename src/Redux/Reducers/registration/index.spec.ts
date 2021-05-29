// #region Local Imports
import { IAction, IRegistration } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { RegistrationReducer } from ".";
// #endregion Local Imports

describe("Registration reducer", () => {
    it("should return the initial state", () => {
        expect(RegistrationReducer(
            undefined,
            {} as IAction<IRegistration.IStateProps>)
        ).toEqual({});
    });
});
