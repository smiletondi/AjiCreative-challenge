// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const LoginActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Login.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Login.ResetReducer
    })
};
