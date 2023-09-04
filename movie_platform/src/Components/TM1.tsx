import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import "./TM1.css";

function TM1() {
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
      <div className="MainBoxTM1">
        <div className="ContentBoxTM1">
          <div className="VideoBoxTM1" onClick={handleVideoClick}>
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
