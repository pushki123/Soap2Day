import { useRef, useState } from "react";
import "./PM5.css";

function PM5() {
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
      <div className="MainBoxPM5">
        <div className="ContentBoxPM5">
          <div className="VideoBoxPM5" onClick={handleVideoClick}>
            {isVideoPlaying ? (
              <video ref={videoRef} width={"1353px"} height={"700px"} controls>
                <source src="./TM1Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              // You can display a video thumbnail or play button here
              <div className="PlayButton"></div>
            )}
          </div>
          <div className="MovieNamePM5">Meg 2: The Trench</div>
          <div className="MovieInfoPM5">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDatePM5">Release Date: 2023-08-02</div>
          <div className="TagsPM5">
            <div className="TagNamePM5">Action</div>
            <div className="TagNamePM5">Science Fiction</div>
            <div className="TagNamePM5">Horror</div>
          </div>
          <div className="RatingPM5"></div>
        </div>
      </div>
    </>
  );
}

export default PM5;
