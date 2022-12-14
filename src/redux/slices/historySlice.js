import {createSlice} from "@reduxjs/toolkit";
import {historyItems} from "../../components/FeaturesSideBar/Items";

const initialState = {
    transformations: historyItems,
    count: 1,
    selectedHistoryItemKey: undefined
};

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        updateTransformationHistory: (state, {payload}) => {
            state.transformations.children = payload;
            state.count = payload.length;
        },
        updateSelectedHistoryItemKey: (state, {payload}) => {
            state.selectedHistoryItemKey = payload;
        }
    }
});

export const {
    updateTransformationHistory,
    initializeTransformationsItem,
    updateSelectedHistoryItemKey
} = historySlice.actions;

export default historySlice.reducer;
