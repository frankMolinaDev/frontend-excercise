import {createSlice} from "@reduxjs/toolkit";
import {getItem} from "../../utils";

const initialState = {
    transformations: getItem("History", "sub2", undefined, []),
    count: 0
};

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        updateTransformationHistory: (state, {payload}) => {
            state.transformations.children = payload;
            state.count++;
        }
    }
});

export const {updateTransformationHistory} = historySlice.actions;

export default historySlice.reducer;
