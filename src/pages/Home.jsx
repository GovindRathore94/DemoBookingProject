import React from "react";
import styles from "./Home.module.css";
// import techImg from "../assets/img/Main_Image.jpg";
import techImg from "../assets/img/landingpage.png";
import selfImg from "../assets/img/React-logo.png";

export default function Home() {
  return (
    <>
      <div className={styles.homePageContent}>
        <h1>Welcome to the Govind Rathore World !</h1>
        <div className={styles.techImg}>
          <img src={techImg} alt="" />
        </div>
        <div className={styles.selfImg}>
          <img src={selfImg} alt="" />
        </div>
        <div>
          <h1>Other Content</h1>
        </div>
      </div>
    </>
  );
}
