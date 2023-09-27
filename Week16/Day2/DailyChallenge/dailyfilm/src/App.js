import React from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <div>
      <h1>Movie App</h1>
      <MovieList />
      <MovieDetails />
    </div>
  );
};

export default App;