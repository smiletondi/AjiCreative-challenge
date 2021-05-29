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
        case ActionConsts.Home.ValidateRegistration:
            return produce(state, draftState => {
                const { payload } = action;
                if ("name" in payload?.user!) {
                    draftState.user.name = payload?.user.name!;
                }
                if ("firstName" in payload?.user!) {
                    draftState.user.firstName = payload?.user.firstName!;
                }
                if ("email" in payload?.user!) {
                    draftState.user.email = payload?.user.email!;
                }
            });
        case ActionConsts.Home.ValidatePassword:
            return produce(state, draftState => {
                const { payload } = action;
                if ("password" in payload?.user!) {
                    draftState.user.password = payload?.user?.password!;
                }
            });

        default:
            return state;
    }
};
