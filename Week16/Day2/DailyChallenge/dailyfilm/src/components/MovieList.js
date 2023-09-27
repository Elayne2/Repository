import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

const MovieList = (props) => {
  const renderList = () => {
    return props.movies.map((movie) => {
      return (
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <button onClick={() => props.selectMovie(movie)}>Select</button>
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps, { selectMovie })(MovieList);