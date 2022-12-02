import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    path: "https://assets.imgix.net/blog/unsplash-kiss.jpg?w=1200&h=2500&fit=crop"
};

export const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {}
});

// export const {} = imageSlice.actions;

export default imageSlice.reducer;
