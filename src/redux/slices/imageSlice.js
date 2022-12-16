import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {galleryItems} from "../../components/FeaturesSideBar/Items";
import {getImagesList} from "../../request/request";
import {arrayToMenuItems} from "../../utils";

const initialState = {
    path: "",
    params: {},
    imagesList: galleryItems,
    selectedGalleryItem: undefined,
    loading: false,
    success: false,
    message: "",
    loadingTransformation: false,
    showFull: false
};

export const getImages = createAsyncThunk("image/getImages", async (arg, {rejectWithValue}) => {
    try {
        const {data} = await getImagesList();
        return arrayToMenuItems(data);
    } catch (error) {
        rejectWithValue(error.response.data);
    }
});

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
        },
        startedLoadingTransformation: (state) => {
            state.loadingTransformation = true;
        },
        finishedLoadingTransformation: (state) => {
            state.loadingTransformation = false;
        },
        showFullImageView: (state) => {
            state.showFull = true;
        },
        hideFullImageView: (state) => {
            state.showFull = false;
        }
    },
    extraReducers: {
        [getImages.pending]: (state) => {
            state.loading = true;
        },
        [getImages.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.imagesList.children = payload;
            state.sucess = true;
        },
        [getImages.rejected]: (state, {payload}) => {
            state.loading = false;
            state.message = payload;
            state.sucess = false;
        }
    }
});

export const {
    updatePath,
    updateParams,
    updateDefaultImagesList,
    updateSelectedGalleryItem,
    cleanPathAndParams,
    startedLoadingTransformation,
    finishedLoadingTransformation,
    showFullImageView,
    hideFullImageView
} = imageSlice.actions;

export default imageSlice.reducer;
