import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import "./TM3.css";

function TM3() {
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
      <div className="MainBoxTM3">
        <div className="ContentBoxTM3">
          <div className="VideoBoxTM3" onClick={handleVideoClick}>
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
          <div className="MovieNameTM3">Meg 2: The Trench</div>
          <div className="MovieInfoTM3">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDateTM3">Release Date: 2023-08-02</div>
          <div className="TagsTM3">
            <div className="TagNameTM3">Action</div>
            <div className="TagNameTM3">Science Fiction</div>
            <div className="TagNameTM3">Horror</div>
          </div>
          <div className="RatingTM3"></div>
        </div>
      </div>
    </>
  );
}

export default TM3;
