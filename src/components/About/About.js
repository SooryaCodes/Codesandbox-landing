import React, { useRef, useEffect } from "react";

export default function About() {
  const videoEl = useRef(null);

  //Function addVideoObserver

  const addVideoObserver = (e) => {
    let videoElem = videoEl.current;
    if (e[0].isIntersecting) {
      videoElem.classList.add("active");
      videoElem.play();
    }
  };

  //Video Options
  let videoOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  //UseEffect
  useEffect(() => {
    //Video Observer
    let videoObserver = new IntersectionObserver(
      addVideoObserver,
      videoOptions
    );

    videoObserver.observe(videoEl.current);
  });
  return (
    <>
        <div className="container mx-auto flex justify-center flex-col items-center text-center px-5 py-10 ul:py-16">
          <div className="">
            <video
              ref={videoEl}
              className="rounded-md w-65 about-video "
              src="/videos/hero.mp4"
            ></video>
          </div>
        </div>
    </>
  );
}
