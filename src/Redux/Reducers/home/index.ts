/* eslint-disable no-param-reassign */
import { IAction, IHomePage } from "@Interfaces";

import { ActionConsts } from "@Definitions";
import produce from "immer";

const INITIAL_STATE: IHomePage.IStateProps = {
    home: {
        version: 1,
    },
    image: {
        url: "",
    },
    user: {
        firstName: "",
        name: "",
        email: "",
        password: "",
    },
    path: "login",
};

type IMapPayload = IHomePage.Actions.IMapPayload;
type IChangePath = IHomePage.Actions.IChangePath;

export const HomeReducer = (
    state = INITIAL_STATE,
    action: IAction<IMapPayload>
) => {
    switch (action.type) {
        case ActionConsts.Home.SetReducer:
            return {
                ...state,
                ...action.payload,
            };

        case ActionConsts.Home.ResetReducer:
            return INITIAL_STATE;

        case ActionConsts.Home.ChangePath:
            return produce(state, draftState => {
                draftState.path = action?.payload?.path!;
            });

        default:
            return state;
    }
};
