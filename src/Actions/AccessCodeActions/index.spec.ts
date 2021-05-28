// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { AccessCodeActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("AccessCode action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.AccessCode.SetReducer
            },
        ];

        store.dispatch(AccessCodeActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            accessCode: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.AccessCode.ResetReducer
            },
        ];

        store.dispatch(AccessCodeActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
