// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { LoginActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Login action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Login.SetReducer
            },
        ];

        store.dispatch(LoginActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            login: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Login.ResetReducer
            },
        ];

        store.dispatch(LoginActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
