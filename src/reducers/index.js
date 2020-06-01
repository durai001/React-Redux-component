import { combineReducers } from "redux";

import * as auth from './auth.reducer'
import userReducer from './user.reducer'


export const rootreducer = combineReducers({
    login:auth.loginReducer,
    userReducer,
 })