import {configureStore} from "@reduxjs/toolkit";
import historyReducer from "./slices/historySlice";
import imageReducer from "./slices/imageSlice";

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    reducer: {
        history: historyReducer,
        image: imageReducer
    }
});
