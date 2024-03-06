import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'user',
    initialState : null,
    reducers : {
       adduser :(state,action) =>{
         return action.payload
       },
       removeuser :(state,action) =>{
         return null
       }
}
}); 

export const {adduser, removeuser} = slice.actions;

export default slice.reducer;