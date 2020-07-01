import React from "react";
import "../styles/styles.scss";
import NavBar from "../components/NavBar";
import MovieCards from "../components/MovieCards";
import MovieDetails from "../components/MovieDetails";

function MoviePage() {
  return (
    <div>
      <NavBar />
      <MovieDetails/>
    </div>
  );
}

export default MoviePage;
