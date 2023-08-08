import "./MoviePage.css";

function MoviePage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="MainBox">
        <div className="ContentBox">
          <div className="VideoBox"></div>
          <div className="MovieName">Meg 2: The Trench</div>
          <div className="MovieInfo">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDate">Release Date: 2023-08-02</div>
          <div className="Tags">
            <div className="TagName">Action</div>
            <div className="TagName">Science Fiction</div>
            <div className="TagName">Horror</div>
          </div>
          <div className="Rating"></div>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
