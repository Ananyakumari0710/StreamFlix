import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import movieReducer from "./movieSlice.js";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
          app: userReducer,
          movie: movieReducer,
          searchMovie:searchSlice

    }  
});
export default store;