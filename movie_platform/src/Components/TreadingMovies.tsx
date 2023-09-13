import "./TreandingMovies.css";
function TreandingMovies() {
  const handlePlayButtonClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <>
      <div className="Row1">
        <h1 className="title">Treanding Movies</h1>
        <div className="TCard poster1T">
          <div className="TMovieName">Happiness For Beginners</div>
          <div className="TRating">8/10</div>
          <div className="TReleaseYear" id="">
            2023
          </div>

          <button
            className="TMovieButton"
            onClick={() => handlePlayButtonClick("./TM1")}
          >
            Play it
            <span className="Tfirst"></span>
            <span className="Tsecond"></span>
            <span className="Tthird"></span>
            <span className="Tfourth"></span>
          </button>
        </div>
        <div className="TCard poster2T">
          <div className="TMovieName">asd</div>
          <div className="TRating">qwe</div>
          <div className="TReleaseYear" id="">
            zxc
          </div>

          <button
            className="TMovieButton"
            onClick={() => handlePlayButtonClick("./TM2")}
          >
            Play it
            <span className="Tfirst"></span>
            <span className="Tsecond"></span>
            <span className="Tthird"></span>
            <span className="Tfourth"></span>
          </button>
        </div>
        <div className="TCard poster3T">
          <div className="TMovieName">asd</div>
          <div className="TRating">qwe</div>
          <div className="TReleaseYear" id="">
            zxc
          </div>

          <button
            className="TMovieButton"
            onClick={() => handlePlayButtonClick("./TM1")}
          >
            Play it
            <span className="Tfirst"></span>
            <span className="Tsecond"></span>
            <span className="Tthird"></span>
            <span className="Tfourth"></span>
          </button>
        </div>
        <div className="TCard poster4T">
          <div className="TMovieName">asd</div>
          <div className="TRating">qwe</div>
          <div className="TReleaseYear" id="">
            zxc
          </div>

          <button
            className="TMovieButton"
            onClick={() => handlePlayButtonClick("./TM4")}
          >
            Play it
            <span className="Tfirst"></span>
            <span className="Tsecond"></span>
            <span className="Tthird"></span>
            <span className="Tfourth"></span>
          </button>
        </div>
        <div className="TCard poster5T">
          <div className="TMovieName">asd</div>
          <div className="TRating">qwe</div>
          <div className="TReleaseYear" id="">
            zxc
          </div>

          <button
            className="TMovieButton"
            onClick={() => handlePlayButtonClick("./TM5")}
          >
            Play it
            <span className="Tfirst"></span>
            <span className="Tsecond"></span>
            <span className="Tthird"></span>
            <span className="Tfourth"></span>
          </button>
        </div>
        <div className="TBtnClass">
          <button className="TShowMore">
            Show more
            <span className="TFirst"></span>
            <span className="TSecond"></span>
            <span className="TThird"></span>
            <span className="TFourth"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default TreandingMovies;
