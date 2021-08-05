import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer =combineReducers({

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>