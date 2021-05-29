import { ActionConsts } from "@Definitions";
import { Dispatch } from "redux";

export const RegistrationActions = {
    Map: (payload: any) => ({
        payload,
        type: ActionConsts.Registration.SetReducer,
    }),

    Reset: () => ({
        type: ActionConsts.Registration.ResetReducer,
    }),

    SaveUserDetails: (payload: any) => async (dispatch: Dispatch) => {
        dispatch({
            payload,
            type: ActionConsts.Registration.SetReducer,
        });
    },
};
