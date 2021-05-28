// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, ILogin } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: ILogin.IStateProps = { };

type IMapPayload = ILogin.Actions.IMapPayload;

export const LoginReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Login.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Login.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
