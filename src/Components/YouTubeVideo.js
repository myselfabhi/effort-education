import React from 'react';

function YouTubeVideo() {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
    <div className="relative" style={{ paddingBottom: "56.25%", height: "0" }}>
      <iframe
        title="YouTube Video"
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/kFKzROacq5I?autoplay=1&mute=1&loop=1&playlist=kFKzROacq5I"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
}

export default YouTubeVideo;
