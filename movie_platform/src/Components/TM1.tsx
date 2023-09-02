import Navbar from "./Navbar";
import "./TM1.css";

function TM1() {
  return (
    <>
      <Navbar />
      <div className="MainBoxTM1">
        <div className="ContentBoxTM1">
          <div className="VideoBoxTM1"></div>
          <div className="MovieNameTM1">Meg 2: The Trench</div>
          <div className="MovieInfoTM1">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDateTM1">Release Date: 2023-08-02</div>
          <div className="TagsTM1">
            <div className="TagNameTM1">Action</div>
            <div className="TagNameTM1">Science Fiction</div>
            <div className="TagNameTM1">Horror</div>
          </div>
          <div className="RatingTM1"></div>
        </div>
      </div>
    </>
  );
}

export default TM1;
