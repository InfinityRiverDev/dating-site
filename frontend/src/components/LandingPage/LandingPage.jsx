import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.hero}>Find Your University Connections</h1>

        <p className={styles.text}>
          We are committed to helping students find love and friendship every day. <br />
          KNRTU MatchMaker connects students for lasting and fulfilling relationships on campus.
        </p>
        <div className={styles.bottom}>communicate.</div>
      </div>
      <div className={styles.wave}>
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className={styles.svg}
        >C 80 70, 120 40, 130 60
              C 150 40, 170 80, 130 100
          <path
            d="
              M 0 100
              Q 30 150 130 100
              C 170 80, 150 40, 130 60
              C 120 40, 80 70, 130 100
              C 300 200, 400 140, 1000 200
            "
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

    </div>
  );
};

export default LandingPage;
