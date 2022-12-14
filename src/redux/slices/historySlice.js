import {createSlice} from "@reduxjs/toolkit";
import {historyItems} from "../../components/FeaturesSideBar/Items";

const initialState = {
    transformations: historyItems,
    selectedHistoryItemKey: undefined
};

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        updateTransformationHistory: (state, {payload}) => {
            state.transformations.children = payload;
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
