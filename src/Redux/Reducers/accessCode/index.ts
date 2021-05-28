// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IAccessCode } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IAccessCode.IStateProps = { };

type IMapPayload = IAccessCode.Actions.IMapPayload;

export const AccessCodeReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.AccessCode.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.AccessCode.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
