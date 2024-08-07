// components/VideoPlayer.js
"use client";
import React, { useRef, useState } from "react";
import styles from "./videoplayer.module.scss";
import Image from "next/image";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className={styles.video}
        width="600"
        controls={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div className={styles.playButtonContainer} onClick={handlePlay}>
          <Image
            src="assets/images/play_icon.svg"
            alt="Play"
            width={64}
            height={64}
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
