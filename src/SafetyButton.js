import React, { useState, useEffect, useRef } from "react";
import "./SafetyButton.css";

const SafetyButton = ({ dangerValue, warningText, children }) => {
  const [isActivated, setIsActivated] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= dangerValue) {
          setIsActivated(true);
          clearInterval(timerRef.current);
        }
        return newProgress;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setProgress(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="safety-button">
      <button
        className={`danger-button ${isActivated ? "activated" : ""}`}
        onMouseDown={startTimer}
        onMouseUp={stopTimer}
        onMouseLeave={stopTimer}
      >
        {isActivated ? "Activated" : `${progress}s`}
      </button>
      <p className="warning-text">{warningText}</p>
      <div className={`content ${isActivated ? "" : "disabled"}`}>{children}</div>
    </div>
  );
};

export default SafetyButton;
