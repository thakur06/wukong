import React, { useRef, useEffect } from "react";

const VideoWithOverlay = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play the video (muted due to browser policies)
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Autoplay failed:", err);
      });
    }
  }, []);

  return (
<div className="relative w-screen h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-screen h-full object-cover" // Changed to w-screen and object-cover
        src="/videos/bg.mp4"
      />

      {/* PNG Overlay */}
      <div className="absolute top-0 left-0 w-screen h-full pointer-events-none">
        <img
          src="/img/video-overlay.png"
          alt="Overlay"
          className="w-screen h-full object-cover" // Match video sizing
        />
      </div>

      {/* Optional Content */}
      <div className="relative z-10 text-white text-center p-8">
        <h1 className="text-4xl font-bold">Your Content Here</h1>
      </div>
    </div>)
};

export default VideoWithOverlay;