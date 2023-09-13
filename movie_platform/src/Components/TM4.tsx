import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import "./TM4.css";

function TM4() {
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
      <div className="MainBoxTM4">
        <div className="ContentBoxTM4">
          <div className="VideoBoxTM4" onClick={handleVideoClick}>
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
          <div className="MovieNameTM4">Meg 2: The Trench</div>
          <div className="MovieInfoTM4">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDateTM4">Release Date: 2023-08-02</div>
          <div className="TagsTM4">
            <div className="TagNameTM4">Action</div>
            <div className="TagNameTM4">Science Fiction</div>
            <div className="TagNameTM4">Horror</div>
          </div>
          <div className="RatingTM4"></div>
        </div>
      </div>
    </>
  );
}

export default TM4;
