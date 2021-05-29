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
    errors: {
        email: false,
        password: false,
    },
};

type IMapPayload = IHomePage.Actions.IMapPayload;

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
        case ActionConsts.Home.UpdateUserDetails:
            return produce(state, draftState => {
                draftState.user = action?.payload?.user!;
            });
        case ActionConsts.Home.SetErrors:
            console.log(action);
            return produce(state, draftState => {
                draftState.errors = action?.payload?.errors!;
            });

        default:
            return state;
    }
};
