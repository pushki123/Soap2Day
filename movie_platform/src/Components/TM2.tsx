import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import "./TM2.css";

function TM2() {
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
      <div className="MainBoxTM2">
        <div className="ContentBoxTM2">
          <div className="VideoBoxTM2" onClick={handleVideoClick}>
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
          <div className="MovieNameTM2">Meg 2: The Trench</div>
          <div className="MovieInfoTM2">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDateTM2">Release Date: 2023-08-02</div>
          <div className="TagsTM2">
            <div className="TagNameTM2">Action</div>
            <div className="TagNameTM2">Science Fiction</div>
            <div className="TagNameTM2">Horror</div>
          </div>
          <div className="RatingTM2"></div>
        </div>
      </div>
    </>
  );
}

export default TM2;
