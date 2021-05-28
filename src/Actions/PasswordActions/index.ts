// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const PasswordActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Password.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Password.ResetReducer
    })
};
