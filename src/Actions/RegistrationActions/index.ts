// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const RegistrationActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Registration.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Registration.ResetReducer
    })
};
