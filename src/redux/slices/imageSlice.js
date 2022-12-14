import {createSlice} from "@reduxjs/toolkit";
import {galleryItems} from "../../components/FeaturesSideBar/Items";

const initialState = {
    path: "",
    params: {},
    imagesList: galleryItems,
    selectedGalleryItem: undefined
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
        },
        updateSelectedGalleryItem: (state, {payload}) => {
            state.selectedGalleryItem = payload;
        },
        cleanPathAndParams: (state) => {
            state.path = "";
            state.params = {};
        }
    }
});

export const {
    updatePath,
    updateParams,
    updateDefaultImagesList,
    updateSelectedGalleryItem,
    cleanPathAndParams
} = imageSlice.actions;

export default imageSlice.reducer;
