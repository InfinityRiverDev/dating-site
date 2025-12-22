import React, { useEffect, useState } from "react";
import styles from "./Likes.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches } from "../../redux/actions/usersActions";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const Likes = () => {
  const dispatch = useDispatch();
  const matches = useSelector(s => s.users.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? matches.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === matches.length - 1 ? 0 : prev + 1
    );
  };

  if(!matches.length) return <div className={styles.page}><p className={styles.noAn}>Нет анкет</p></div>;

  return (
    <div className={styles.page}>
      <CircleChevronLeft className={styles.arrow} onClick={prev} size={60} strokeWidth={1.5}/>

      <div className={styles.slider}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {matches.map((p) => (
            <div className={styles.card} key={p.id}>
              <img src={p.photo} alt={p.name} />
              <h2>
                {p.name}
              </h2>
              <a href={p.telegram} className={styles.telegram}>{p.telegram}</a>
            </div>
          ))}
        </div>
      </div>

      <CircleChevronRight className={styles.arrow} onClick={next} size={60} strokeWidth={1.5}/>
    </div>
  );
};

export default Likes;
