/* eslint-disable import/order */
import { HomeReducer } from "./home";
import { combineReducers } from "redux";

export default combineReducers({
    home: HomeReducer,
});
