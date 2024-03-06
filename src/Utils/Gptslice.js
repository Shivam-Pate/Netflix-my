import { createSlice } from "@reduxjs/toolkit";


const gptslice = createSlice({
    name : 'gpt',
    initialState : {
        showgpt : false,
        showbar : false,
        gptmovies : null,
        movienames : null,
        movieresults : null
    },
    reducers : {
        togglegpt : (state) =>{
            state.showgpt = !state.showgpt;
        },
        togglebar : (state) =>{
            state.showbar =!state.showbar;
        },
    addgptresult : (state,action) =>{
        const { movienames, movieresults } = action.payload;
        state.movienames = movienames;
        state.movieresults = movieresults;
    },
   
},
},
);



export const {togglegpt , addgptresult ,togglebar} = gptslice.actions;

export default gptslice.reducer;