// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { RegistrationActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Registration action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.Registration.SetReducer
            },
        ];

        store.dispatch(RegistrationActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            registration: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Registration.ResetReducer
            },
        ];

        store.dispatch(RegistrationActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
