import React, { useState } from 'react';
import './App.css';
import MoviesList from './Components/MoviesList/MoviesList';
import {moviesData} from './Constant/Data';
import FilterByName from './Components/FilterByName/FilterByName';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByRate from './Components/Rating/Rating';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const add = (newMovie) => 
  setMovies([...movies, newMovie ]);

  const [InputSearch, setInputSearch] = useState("")  
  const [rating, setRating] = useState(1);
  return (
    <div className="App">
      <h1>MOVIE App</h1>
      <FilterByName InputSearch={InputSearch} setInputSearch={setInputSearch} />
      <FilterByRate rating={rating} setRating={setRating} isMovieRating={false}/>
      <AddMovie add={add}/>
      <MoviesList movies ={movies} InputSearch={InputSearch} rating={rating}/>
    </div>
  );
}

export default App;
