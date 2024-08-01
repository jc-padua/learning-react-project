import React, { useState } from 'react';
import Movie from './Movie';

function MovieList({ movies, onSelectedID }) {
  return (
    <ul className="list list-movies">
      {movies?.map(movie => (
        <Movie key={movie.imdbID} movie={movie} onSelectedID={onSelectedID} />
      ))}
    </ul>
  );
}

export default MovieList;
