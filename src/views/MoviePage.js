import React from "react";
import "../styles/styles.scss";
import NavBar from "../components/NavBar";
import MovieCards from "../components/MovieCards";

function MoviePage() {
  return (
    <div>
      <NavBar />
      <MovieCards />
    </div>
  );
}

export default MoviePage;
