"use client";

import React, { useEffect, useRef } from "react";

const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Preload the video
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/primjer.mp4" // Replace with your actual video path
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Welcome to Our Story
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl">
          Discover who we are, what drives us, and our vision for the future. At
          Erlang, we are committed to innovation, creativity, and excellence in
          everything we do.
        </p>
      </div>
    </div>
  );
};

export default About;
