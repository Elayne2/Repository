import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = (props) => {
  const { selectedMovie } = props;

  if (!selectedMovie) {
    return <div>Select a movie</div>;
  }

  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <p>Release Date: {selectedMovie.releaseDate}</p>
      <p>Rating: {selectedMovie.rating}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie
});

export default connect(mapStateToProps)(MovieDetails);