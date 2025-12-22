import React, { useState } from "react";
import styles from "./Music.module.css";

const Music = () => {
  const [trackId, setTrackId] = useState("39307896");
  const [value, setValue] = useState("");

  const handleBlur = () => {
    const match = value.match(/\d+/);

    if (match) {
      setTrackId(match[0]);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <iframe
          src={`https://music.yandex.ru/iframe/track/${trackId}`}
          title="Yandex Music Player"
          allow="clipboard-write"
          loading="lazy"
        />
        <input
          placeholder="Link"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default Music;