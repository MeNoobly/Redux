import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = configureStore({reducer: rootReducer, devTools: composeWithDevTools(applyMiddleware(thunk))});