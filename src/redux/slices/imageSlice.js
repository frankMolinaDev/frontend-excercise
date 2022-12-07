import {createSlice} from "@reduxjs/toolkit";
import {getItem} from "../../utils";

const initialState = {
    path: "",
    params: {},
    imagesList: getItem("Select Image", "sub3", undefined, [])
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
        },
        updateDefaultImagesList: (state, {payload}) => {
            state.imagesList.children = payload;
        }
    }
});

export const {updatePath, updateParams, updateDefaultImagesList} = imageSlice.actions;

export default imageSlice.reducer;
