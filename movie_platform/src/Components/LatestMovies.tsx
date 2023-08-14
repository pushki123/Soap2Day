import Navbar from "./Navbar";
import "./LatestMovies.css";
import Footer from "./Footer";

function LatestMovies() {
  return (
    <>
      <Navbar />

      <div className="Gradient">
        <div className="T1">Movies</div>
      </div>
      <div className="MovieLayout">
        <input type="text" className="MovieInput" />
        <div className="MoviesLayout">
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
          <div className="MoviePoster"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LatestMovies;
