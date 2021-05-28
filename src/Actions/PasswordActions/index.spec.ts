// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { PasswordActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Password action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Password.SetReducer
            },
        ];

        store.dispatch(PasswordActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            password: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Password.ResetReducer
            },
        ];

        store.dispatch(PasswordActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
