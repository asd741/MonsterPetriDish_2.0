import { combineReducers } from "redux";
import { userReducer } from "./user.redux";
import { pageReducer } from "./page.redux";
export const reducers=combineReducers({userReducer,pageReducer});