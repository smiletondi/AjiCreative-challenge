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
};
