import React, { useState } from "react";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authActions";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, isAuth } = useSelector(s => s.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isAuth) return <Navigate to="/ankets" />;

  const submit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Login</h1>
        <p className={styles.subtitle}>Welcome back</p>

        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"  />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        
        {error && <p className={styles.error}>{error}</p>}

        <button onClick={submit} disabled={loading}>
          {loading ? "Loading..." : "Log in"}
        </button>

        <span className={styles.footer}>
          No account? <Link to="/signup">Sign up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
