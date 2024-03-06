import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./Slice";
import moviesReducer from "./Movieslice";
import gptReducer from './Gptslice';
import configReducer from './Configslice'

const store =configureStore({
    reducer:{
        user : SliceReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        config : configReducer,
    }
})
export default store;