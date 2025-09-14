import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId , bool}) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  // Fetch trailer details
  useMovieById(movieId);

  // Debug logs
  console.log("VideoBackground -> trailerMovie:", trailerMovie);

  // Show loading/fallback while data is not ready
  if (!trailerMovie || !trailerMovie.key) {
    return (
      <div className="w-screen h-[60vh] flex items-center justify-center text-white">
        ⏳ Loading trailer...
      </div>
    );
  }

  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className={`${bool ? "w-[100%]" :" w-screen aspect-video"  }`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;
