import React from 'react';

function MoviesNumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default MoviesNumResult;
