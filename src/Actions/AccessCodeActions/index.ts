// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const AccessCodeActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.AccessCode.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.AccessCode.ResetReducer
    })
};
