import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {figuresReducer} from "../redusers/figure-reducer";


const rootReducer = combineReducers({
    figures: figuresReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store;