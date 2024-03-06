import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name : 'movies',
    initialState : {
        nowplayingmovies : null,
        trailervideo : null,
        toprated : null,
        upcoming : null,
    },
    reducers : {
       addnowplayingmovies :(state,action) =>{
         state.nowplayingmovies = action.payload
       },
       addtoprated :(state,action) =>{
        state.toprated = action.payload
      },
      addupcoming :(state,action) =>{
        state.upcoming = action.payload
      },
       addtrailervideo :(state,action) =>{
         state.trailervideo = action.payload
       }
      
}
}); 

export const {addnowplayingmovies , addtrailervideo , addtoprated ,addupcoming} = movieslice.actions;

export default movieslice.reducer;