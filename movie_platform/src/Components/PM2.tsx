import { useRef, useState } from "react";
import "./PM2.css";

function PM2() {
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
      <div className="MainBoxPM2">
        <div className="ContentBoxPM2">
          <div className="VideoBoxPM2" onClick={handleVideoClick}>
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
          <div className="MovieNamePM2">Meg 2: The Trench</div>
          <div className="MovieInfoPM2">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDatePM2">Release Date: 2023-08-02</div>
          <div className="TagsPM2">
            <div className="TagNamePM2">Action</div>
            <div className="TagNamePM2">Science Fiction</div>
            <div className="TagNamePM2">Horror</div>
          </div>
          <div className="RatingPM2"></div>
        </div>
      </div>
    </>
  );
}

export default PM2;
