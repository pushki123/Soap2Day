import { useRef, useState } from "react";
import "./TM5.css";

function TM5() {
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
      <div className="MainBoxTM5">
        <div className="ContentBoxTM5">
          <div className="VideoBoxTM5" onClick={handleVideoClick}>
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
          <div className="MovieNameTM5">Meg 2: The Trench</div>
          <div className="MovieInfoTM5">
            An exploratory dive into the deepest depths of the ocean of a daring
            research team spirals into chaos when a malevolent mining operation
            threatens their mission and forces them into a high-stakes battle
            for survival.
          </div>
          <div className="RealeaseDateTM5">Release Date: 2023-08-02</div>
          <div className="TagsTM5">
            <div className="TagNameTM5">Action</div>
            <div className="TagNameTM5">Science Fiction</div>
            <div className="TagNameTM5">Horror</div>
          </div>
          <div className="RatingTM5"></div>
        </div>
      </div>
    </>
  );
}

export default TM5;
