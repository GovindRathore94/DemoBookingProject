// AnalogWatch.jsx

import React, { useState, useEffect } from "react";
import styles from "./AnalogWatch.module.css";

const AnalogWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getIndiaTime = () => {
    const indiaTime = new Date(time);
    // console.log(indiaTime);
    indiaTime.setHours(time.getHours());
    indiaTime.setMinutes(time.getMinutes());
    return indiaTime;
  };

  const getHandRotation = (unit, value) => {
    const rotation = 90 + (value % unit) * (360 / unit);
    return `rotate(${rotation}deg)`;
  };

  const indiaTime = getIndiaTime();

  return (
    <div className={styles["analog-watch"]}>
      <div className={styles["watch-face"]}>
        <div
          className={styles["hour-hand"]}
          style={{ transform: getHandRotation(12, indiaTime.getHours()) }}
        ></div>
        <div
          className={styles["minute-hand"]}
          style={{ transform: getHandRotation(60, indiaTime.getMinutes()) }}
        ></div>
        <div
          className={styles["second-hand"]}
          style={{ transform: getHandRotation(60, indiaTime.getSeconds()) }}
        ></div>
        <div className={styles["center-circle"]}></div>
      </div>
      <div className={styles["digital-clock"]}>
        <p>{indiaTime.toLocaleTimeString("en-IN", { hour12: true })}</p>
      </div>
    </div>
  );
};

export default AnalogWatch;
