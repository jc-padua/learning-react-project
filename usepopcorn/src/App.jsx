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

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = 'de5d2500';

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedID, setSelectedID] = useState(null);

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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok)
          throw new Error('Something went wrong with fetching movies');

        const data = await res.json();

        if (data.Response === 'False') throw new Error('Movie not Found');

        setMovies(data.Search);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }
    fetchMovies();
  }, [query]);

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
