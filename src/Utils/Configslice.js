import { createSlice } from "@reduxjs/toolkit";


 const configslice = createSlice({
    name: 'config',
    initialState: {
    lang : 'en',
    },
    reducers: {
        changelang:(state,action) => {
            state.lang = action.payload
        },

    },
 });


 export const {changelang} = configslice.actions;
 export default configslice.reducer;