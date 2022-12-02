import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    path: ""
};

export const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        updatePath: (state, {payload}) => {
            state.path = payload;
        }
    }
});

export const {updatePath} = imageSlice.actions;

export default imageSlice.reducer;
