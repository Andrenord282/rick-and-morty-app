import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { characterListReducer } from "./characterListSlice";

const rootReducer = combineReducers({
    characterList: characterListReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;
