import {configureStore} from "@reduxjs/toolkit";
import historyReducer from "./slices/historySlice";
import imageReducer from "./slices/imageSlice";

export const store = configureStore({
    reducer: {
        history: historyReducer,
        image: imageReducer
    }
});
