import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div className={styles.headerWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
          {!isAuth ? (
            <>
              <Link to="/about">AboutUs</Link>
            </>
          ) : (
            <>
              <Link to="/about">AboutUs</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/ankets">Ankets</Link>
              <Link to="/likes">Likes</Link>
            </>
          )}
        </div>

        <div className={styles.logo}>
          <Link className={styles.main} to="/">KNRTU DATING</Link>
        </div>

        <div className={styles.rightNav}>
          {!isAuth ? (
        <>
          <Link to="/login">Log in</Link>
          <Link to="/signup" className={styles.signup}>Sign up</Link>
        </>
      ) : (
          <Link className={styles.signup} onClick={() => dispatch(logout())}>Logout</Link>
      )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
