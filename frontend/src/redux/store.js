import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
