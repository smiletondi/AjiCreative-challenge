// #region Local Imports
import { ActionConsts } from "@Definitions";
// #region Global Imports
import { Dispatch } from "redux";
// #region Interface Imports
import { IHomePage } from "@Interfaces";
import { PlanetaryService } from "@Services";
// #endregion Global Imports

// #endregion Local Imports

// #endregion Interface Imports

export const HomeActions = {
    Map: (payload: {}) => ({
        payload,
        type: ActionConsts.Home.SetReducer,
    }),

    Reset: () => ({
        type: ActionConsts.Home.ResetReducer,
    }),

    GetApod: (payload: IHomePage.Actions.IGetApodPayload) => async (
        dispatch: Dispatch
    ) => {
        const result = await PlanetaryService.GetPlanetImage({
            params: payload.params,
        });

        dispatch({
            payload: {
                image: result,
            },
            type: ActionConsts.Home.SetReducer,
        });
    },

    ChangePath: (payload: IHomePage.Actions.IChangePath) => (
        dispatch: Dispatch
    ) => {
        dispatch({
            payload,
            type: ActionConsts.Home.ChangePath,
        });
    },

    UpdateUserDetails: (payload: IHomePage.Actions.IUpdateUserDetails) => (
        dispatch: Dispatch
    ) => {
        dispatch({
            payload,
            type: ActionConsts.Home.UpdateUserDetails,
        });
    },
    ValidateEmail: (payload: IHomePage.Actions.IValidateEmail) => (
        dispatch: Dispatch
    ) => {
        dispatch({
            payload,
            type: ActionConsts.Home.UpdateUserDetails,
        });
        dispatch({
            payload: {
                path: "password",
            },
            type: ActionConsts.Home.ChangePath,
        });
    },
    ValidateRegistration: (
        payload: IHomePage.Actions.IValidateRegistration
    ) => (dispatch: Dispatch) => {
        dispatch({
            payload: {
                user: payload,
            },
            type: ActionConsts.Home.UpdateUserDetails,
        });
        dispatch({
            payload: {
                path: "password",
            },
            type: ActionConsts.Home.ChangePath,
        });
    },
    ValidatePassword: (payload: IHomePage.Actions.IValidatePassword) => (
        dispatch: Dispatch
    ) => {
        dispatch({
            payload: {
                user: payload,
            },
            type: ActionConsts.Home.ValidatePassword,
        });
        dispatch({
            payload: {
                path: "feed",
            },
            type: ActionConsts.Home.ChangePath,
        });
    },
    SetErrors: (payload: IHomePage.Actions.ISetErrors) => (
        dispatch: Dispatch
    ) => {
        dispatch({
            payload,
            type: ActionConsts.Home.SetErrors,
        });
    },
};
