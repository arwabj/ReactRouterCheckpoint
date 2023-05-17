import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';
const MoviesList = ({movies, InputSearch, rating}) => {
  return (

    <div >
        <h2>Movie List</h2> 
        <div className='movie'>
        {movies
        .filter(
          (movie) =>
           movie.title.toUpperCase().includes(InputSearch.toUpperCase())
        &&
        movie.rate >= rating)
        .map((movie) => (<MovieCard movie={movie} key={movie.id}/>
        ) ) }

        </div>
        
        
    </div>
  );
};

export default MoviesList;