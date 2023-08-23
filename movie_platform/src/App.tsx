import "./App.css";
import Navbar from "./Components/Navbar";
// import Message from "./Components/Navbar";
import SliderComponent from "./Components/SliderComponent";
import TreandingMovies from "./Components/TreadingMovies";
import PopularMovies from "./Components/PopularMovies";
import TopRatedMovies from "./Components/TopRatedMovies";
import MoviePage from "./Components/MoviePage";
import HomePage from "./Components/HomePage";
import AboutMoviePage from "./Components/AboutMoviePage";
import LatestMovies from "./Components/LatestMovies";
// import { Router } from "@mui/icons-material";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {
        /* <LatestMovies /> */
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/AboutMoviePage" element={<AboutMoviePage />}></Route>
            <Route path="/MoviePage" element={<MoviePage />}></Route>
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
