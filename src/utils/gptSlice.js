import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false
    },
    reducers : {
        updateShowGptSlice: (store) => {
            store.showGptSearch = !store.showGptSearch
        }
    }
})

export const { updateShowGptSlice } = gptSlice.actions;

export default gptSlice.reducer;