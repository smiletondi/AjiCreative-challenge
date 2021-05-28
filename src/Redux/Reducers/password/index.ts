// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IPassword } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IPassword.IStateProps = { };

type IMapPayload = IPassword.Actions.IMapPayload;

export const PasswordReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Password.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Password.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
