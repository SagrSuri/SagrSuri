// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import "./Rippling.css";
import RipplingBack from './RipplingBack'

function Rippling() {
  const loaderRef = useRef(null);

  useEffect(() => {
    let debounce = false;

    const loaderAnimate = () => {
      if (debounce) return;
      debounce = true;
      loaderRef.current.classList.add("clicked");
      setTimeout(() => {
        loaderRef.current.classList.remove("clicked");
        debounce = false;
      }, 700);
    };

    const createWave = () => {
      const wave = document.createElement("div");
      wave.classList.add("wave");
      
      // Place the wave within the loader_center div
      loaderRef.current.appendChild(wave);

      setTimeout(() => {
        wave.remove();
      }, 7000);
    };

    const intervalId = setInterval(() => {
      loaderAnimate();
      createWave();
    }, 1000);

    // Cleanup the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="rippling-container">
      
      <div className="loader_center" ref={loaderRef}>
        <div className="content"><RipplingBack /></div>
      </div>
    </div>
  );
}

export default Rippling;
