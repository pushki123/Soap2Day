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
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="Background">
        <HomePage />
      </div>
    </>
  );
}

export default App;
