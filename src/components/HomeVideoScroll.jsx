import React, { useEffect, useRef, useState } from "react";

const videoData = [
  {
    src: "https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4",
    src2: "/src/assets/video1logo.png",
    text: "Forced to go rogue. Hunted from Within.",
    subtext: "This is Black Ops 6."
  }
];

const HorizontalHero = () => {

  return (
    <>
   <div className="relative">
  {videoData.map((video, index) => (
    <section key={index} className="relative h-screen w-full overflow-hidden">
      <video src={video.src} muted loop autoPlay playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0"/>
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 text-white text-center px-4 h-full flex flex-col justify-center items-center">
        <img src={video.src2} alt="hero" className="mb-4" />
        <div className="text-2xl font-extrabold">
        <p>{video.text}</p>
        <p>{video.subtext}</p>
        </div>
      </div>

    </section>
  ))}
</div>

      </>
  );
};

function HomeVideoScroll() {
  return (
    HorizontalHero()
  )
}

export default HomeVideoScroll;