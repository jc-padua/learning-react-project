import { useState } from 'react';
import BoxElement from './components/Main/Box/BoxElement';
import BoxChildren from './components/Main/Box/BoxChildren';
import Main from './components/Main/Main';
import MoviesNumResult from './components/NavBar/MoviesNumResult';
import MovieList from './components/Main/ListBox/MovieList';
import NavBar from './components/NavBar/NavBar';
import StarRating from './components/StarRating/StarRating';
import WatchedSummary from './components/Main/WatchedBox/WatchedSummary';
import WatchedMovieList from './components/Main/WatchedBox/WatchedMovieList';
import './App.css';
import { useEffect } from 'react';
import Search from './components/NavBar/Search';
import MovieDetails from './components/Main/ListBox/MovieDetails';
import useMovies from './hooks/useMovies';
import useLocalStorage from './hooks/useLocalStorage';

const KEY = 'de5d2500';

function App() {
  const [query, setQuery] = useState('');
  const [selectedID, setSelectedID] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorage([], 'watched');

  const handleAddWatched = movie => {
    setWatched(watched => [...watched, movie]);
  };

  const handleSelectedMovie = id => {
    setSelectedID(selectedID => (id === selectedID ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedID(null);
  };

  const handleDeleteWatched = id => {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));
  };

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <MoviesNumResult movies={movies} />
      </NavBar>
      <Main>
        {/* TWO WAY OF COMPONENT COMPOSITION: CHILDREN AND EXPLICIT */}
        <BoxChildren>
          {isLoading && <p className="loader">Loading...</p>}
          {error && <p className="error">{error}</p>}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectedID={handleSelectedMovie}
              onAddWatched={handleAddWatched}
            />
          )}
        </BoxChildren>
        <BoxChildren>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </BoxChildren>
      </Main>
    </>
  );
}

export default App;
