import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import "./PM1.css";

function PM1() {
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
      <Navbar />
      <div className="MainBoxPM1">
        <div className="ContentBoxPM1">
          <div className="VideoBoxPM1" onClick={handleVideoClick}>
            {isVideoPlaying ? (
              <video ref={videoRef} width="1450" height="700" controls>
                <source src="./PM1Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              // You can display a video thumbnail or play button here
              <div className="PlayButton"></div>
            )}
          </div>
          <div className="MovieNamePM1">Meg 2: The Trench</div>
          <div className="MovieInfoPM1">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDatePM1">Release Date: 2023-08-02</div>
          <div className="TagsPM1">
            <div className="TagNamePM1">Action</div>
            <div className="TagNamePM1">Science Fiction</div>
            <div className="TagNamePM1">Horror</div>
          </div>
          <div className="RatingPM1"></div>
        </div>
      </div>
    </>
  );
}

export default PM1;
