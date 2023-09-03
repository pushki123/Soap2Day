import React from "react";
import "./PopularMovies.css";

function PopularMovies() {
  const handlePlayButtonClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <>
      <div className="Row3">
        <h1>Popular movies</h1>
        <div className="PCard poster1P">
          <div className="PMovieName">Happiness For Beginners</div>
          <div className="PRating">8/10</div>
          <div className="PReleaseYear" id="">
            2023
          </div>
          <button
            className="PMovieButton"
            onClick={() => handlePlayButtonClick("./TM1")}
          >
            Play It
            <span className="Pfirst"></span>
            <span className="Psecond"></span>
            <span className="Pthird"></span>
            <span className="Pfourth"></span>
          </button>
        </div>
        <div className="PCard poster2P">
          <div className="PMovieName">asd</div>
          <div className="PRating">qwe</div>
          <div className="PReleaseYear" id="">
            zxc
          </div>
          <button
            className="PMovieButton"
            onClick={() => handlePlayButtonClick("/TM2")}
          >
            Play It
            <span className="Pfirst"></span>
            <span className="Psecond"></span>
            <span className="Pthird"></span>
            <span className="Pfourth"></span>
          </button>
        </div>
        <div className="PCard poster3P">
          <div className="PMovieName">asd</div>
          <div className="PRating">qwe</div>
          <div className="PReleaseYear" id="">
            zxc
          </div>
          <button
            className="PMovieButton"
            onClick={() => handlePlayButtonClick("/TM3")}
          >
            Play It
            <span className="Pfirst"></span>
            <span className="Psecond"></span>
            <span className="Pthird"></span>
            <span className="Pfourth"></span>
          </button>
        </div>
        <div className="PCard poster4P">
          <div className="PMovieName">asd</div>
          <div className="PRating">qwe</div>
          <div className="PReleaseYear" id="">
            zxc
          </div>
          <button
            className="PMovieButton"
            onClick={() => handlePlayButtonClick("/TM4")}
          >
            Play It
            <span className="Pfirst"></span>
            <span className="Psecond"></span>
            <span className="Pthird"></span>
            <span className="Pfourth"></span>
          </button>
        </div>
        <div className="PCard poster5P">
          <div className="PMovieName">asd</div>
          <div className="PRating">qwe</div>
          <div className="PReleaseYear" id="">
            zxc
          </div>
          <button
            className="PMovieButton"
            onClick={() => handlePlayButtonClick("/TM5")}
          >
            Play It
            <span className="Pfirst"></span>
            <span className="Psecond"></span>
            <span className="Pthird"></span>
            <span className="Pfourth"></span>
          </button>
        </div>
        <div className="PBtnClass">
          <button className="PShowMore">
            Show more
            <span className="PFirst"></span>
            <span className="PSecond"></span>
            <span className="PThird"></span>
            <span className="PFourth"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default PopularMovies;
