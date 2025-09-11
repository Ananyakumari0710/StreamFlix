import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: { 
        nowPlayingMovies:null,
    },
    reducers: {
        // actions
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
});
export const { getNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;