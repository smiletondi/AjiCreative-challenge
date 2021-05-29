// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IRegistration } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IRegistration.IStateProps = { };

type IMapPayload = IRegistration.Actions.IMapPayload;

export const RegistrationReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Registration.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.Registration.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};