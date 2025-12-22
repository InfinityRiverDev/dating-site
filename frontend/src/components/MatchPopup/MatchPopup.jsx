import React from "react";
import styles from "./MatchPopup.module.css";
import { Heart } from "lucide-react";
import { useDispatch } from "react-redux";

const MatchPopup = ({ user }) => {
  const dispatch = useDispatch();

  if (!user) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <Heart size={50} color="red" />
        <h2>It’s a match!</h2>

        <img
          src={user.photo || "https://clck.ru/3QvyTY"}
          alt={user.name}
        />

        <p>You and {user.name} like each other</p>

        <div className={styles.actions}>
          <button
            onClick={() => dispatch({ type: "CLOSE_MATCH" })}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchPopup;
