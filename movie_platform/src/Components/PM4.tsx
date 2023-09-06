import { useRef, useState } from "react";
import "./PM4.css";

function PM4() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (video?.paused) {
      video.play();
    } else if (video) {
      video.pause();
    }

    setIsVideoPlaying(video?.paused ?? true);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="MainBoxPM4">
        <div className="ContentBoxPM4">
          <div className="VideoBoxPM4" onClick={handleVideoClick}>
            {isVideoPlaying ? (
              <video ref={videoRef} width="1450" height="700" controls>
                <source src="./TM1Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              // You can display a video thumbnail or play button here
              <div className="PlayButton"></div>
            )}
          </div>
          <div className="MovieNamePM4">Meg 2: The Trench</div>
          <div className="MovieInfoPM4">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDatePM4">Release Date: 2023-08-02</div>
          <div className="TagsPM4">
            <div className="TagNamePM4">Action</div>
            <div className="TagNamePM4">Science Fiction</div>
            <div className="TagNamePM4">Horror</div>
          </div>
          <div className="RatingPM4"></div>
        </div>
      </div>
    </>
  );
}

export default PM4;
