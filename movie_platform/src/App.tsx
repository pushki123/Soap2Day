// import "./App.css";
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
import PM1 from "./Components/PM1";
import PM2 from "./Components/PM2";
import PM3 from "./Components/PM3";
import PM4 from "./Components/PM4";
import PM5 from "./Components/PM5";
import TM1 from "./Components/TM1";
import TM2 from "./Components/TM2";
import TM3 from "./Components/TM3";
import TM4 from "./Components/TM4";
import TM5 from "./Components/TM5";

function App() {
  return (
    <>
      {/* <div className="Background">
        <TM1 />
      </div> */}
      {
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/AboutMoviePage" element={<AboutMoviePage />}></Route>
            <Route path="/MoviePage" element={<MoviePage />}></Route>
            <Route path="/LatestMovies" element={<LatestMovies />}></Route>
            <Route path="/TM1" element={<TM1 />}></Route>
            <Route path="/TM3" element={<TM3 />}></Route>
            <Route path="/TM4" element={<TM4 />}></Route>
            <Route path="/TM5" element={<TM5 />}></Route>
            <Route path="/TM2" element={<TM2 />}></Route>
            <Route path="/PM1" element={<PM1 />}></Route>
            <Route path="/PM3" element={<PM3 />}></Route>
            <Route path="/PM4" element={<PM4 />}></Route>
            <Route path="/PM5" element={<PM5 />}></Route>
            <Route path="/PM2" element={<PM2 />}></Route>
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
