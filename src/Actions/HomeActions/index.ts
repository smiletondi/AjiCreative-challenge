import { ActionConsts } from "@Definitions";
import { Dispatch } from "redux";
import { IHomePage } from "@Interfaces";
import { PlanetaryService } from "@Services";

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
    // ValidateEmail: (payload: IHomePage.Actions.IValidateEmail) => (
    //     dispatch: Dispatch
    // ) => {
    //     dispatch({
    //         payload,
    //         type: ActionConsts.Home.UpdateUserDetails,
    //     });
    //     dispatch({
    //         payload: {
    //             path: "password",
    //         },
    //         type: ActionConsts.Home.ChangePath,
    //     });
    // },
    ValidateRegistration: (
        payload: IHomePage.Actions.IValidateRegistration
    ) => (dispatch: Dispatch) => {
        dispatch({
            payload: {
                user: payload,
            },
            type: ActionConsts.Home.ValidateRegistration,
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
};
