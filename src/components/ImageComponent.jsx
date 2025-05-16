import React, { useState, useRef, useEffect } from 'react';
import av1 from "../assets/images/av1.png";
import av1video from "../assets/videos/av1.mp4";

export const ImageComponent = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const videoRef = useRef(null);

  const handleToggle = () => {
    if (!isVideoActive) {
      videoRef.current.currentTime = 0; // start from beginning
      videoRef.current.play();
      setIsVideoActive(true); // instantly hide image
    } else {
      videoRef.current.pause();
      setIsVideoActive(false); // instantly show image
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("preload", "auto");
    }
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={av1video}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* Still Image Layer */}
      <img
        src={av1}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 2,
          display: isVideoActive ? 'none' : 'block', // instant toggle
        }}
      />

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#ffffffcc',
          border: 'none',
          cursor: 'pointer',
          zIndex: 3,
        }}
      >
        {isVideoActive ? 'Show Image 🖼️' : 'Play Video 🎥'}
      </button>
    </div>
  );
};
