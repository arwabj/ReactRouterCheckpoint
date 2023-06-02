
import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import MovieDesc from "./Components/MovieDescription/MovieDesc";
import NavBar from "./Components/Navbarr/Navbar";

const Home = () => {
  return (
    <div>
  
      <NavBar/>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/movie/:id' element={<MovieDesc/>}/>
        </Routes>
    </div>
  );
};

export default Home;