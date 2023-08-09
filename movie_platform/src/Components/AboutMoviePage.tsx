import Navbar from "./Navbar";
import "./AboutMoviePage.css";

function AboutMoviePage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="MovieInfo">
        <div className="MoviePoster"></div>
        <div className="AboutMovie">
          <div className="MovieTitle">Dragonkeeper</div>
          <div className="MovieSummary">
            In ancient China, dragons were once friends of men, but men's greed
            and lust for power ended their alliance, and these wise and magical
            creatures were hunted down by the Empire. Years later, in a remote
            fortress, a young slave girl named Ping strikes up an unlikely
            friendship with Long Danzi, the last of the imperial dragons.
            Learning the power of Qi, Ping helps the dragon escape from
            captivity and together they journey across the Empire in order to
            save his lineage, chased by the Emperor's men and pursued by even
            darker powers.
          </div>
          <div className="MovieTags">
            <div className="MovietagName">Action</div>
            <div className="MovietagName">Adventure</div>
            <div className="MovietagName">Animation</div>
            <div className="MovietagName">Family</div>
            <div className="MovietagName">fantasy</div>
          </div>
        </div>
        <button className="Btn"></button>
      </div>
    </>
  );
}

export default AboutMoviePage;
