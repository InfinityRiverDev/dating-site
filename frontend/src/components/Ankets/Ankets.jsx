import React, { useEffect } from "react";
import styles from "./Ankets.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeed, likeUser, skipUser } from "../../redux/actions/usersActions";
import { Flame, Paperclip, ThumbsDown, ThumbsUp } from "lucide-react";

const Ankets = () => {
  const dispatch = useDispatch();
  const users = useSelector(s => s.users.feed);

  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);

  if (!users.length) return <div className={styles.container}><p className={styles.noAn}>Нет анкет</p></div>;

  const u = users[0];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardPhoto}>
          <Paperclip className={styles.Paperclip} size={70}/>
          <img src={u.photo} alt="userPhoto"/>
          <Flame className={styles.Flame} size={50} color="red"/>
        </div>
        <div className={styles.cardInfo}>
          <h2>{u.name}, {u.age}</h2>
          <p className={styles.meta}>{u.institute} · {u.group}</p>

          <p className={styles.about}>
            {u.about}
          </p>
          {u.alreadyRated ? (
            <p>Вы уже оценили</p>
            ) : (
          <div className={styles.actions}>
            <button onClick={() => dispatch(skipUser(u._id))} className={styles.dislike}><ThumbsDown /></button>
            <button onClick={() => dispatch(likeUser(u._id))} className={styles.like}><ThumbsUp /></button>
          </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Ankets;
