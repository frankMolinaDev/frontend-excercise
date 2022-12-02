import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    path: "",
    params: {}
};

export const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        updatePath: (state, {payload}) => {
            state.path = payload;
        },
        updateParams: (state, {payload}) => {
            state.params = payload;
        }
    }
});

export const {updatePath, updateParams} = imageSlice.actions;

export default imageSlice.reducer;
