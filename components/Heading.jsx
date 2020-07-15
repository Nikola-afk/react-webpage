import React from "react";
import "../components/Heading.css";
import { AnimateOnChange } from "react-animation";

const { useState, useEffect } = React;

const Heading = () => {
  const words = [
    "Hello!",
    "I am Nikola...",
    "a frontend web developer",
    "Welcome!",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <React.Fragment>
      {
        <div id="home" className="hero">
          <h1 className="hero-1">
            <AnimateOnChange>{words[current]}</AnimateOnChange>
          </h1>
        </div>
      }
    </React.Fragment>
  );
};

export default Heading;
