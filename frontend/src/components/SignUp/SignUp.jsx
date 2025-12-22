import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authActions";
import { Link, Navigate } from "react-router-dom";
import { Heart } from "lucide-react";

const SignUp = () => {
  const dispatch = useDispatch();
  const { isAuth, loading } = useSelector(s => s.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    telegram: ""
  });

  if (isAuth) return <Navigate to="/profile" />;

  const submit = () => {
    dispatch(register(form));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Sign up <Heart size={20} strokeWidth={3}/></h1>

        <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
        <input placeholder="Telegram" onChange={e => setForm({...form, telegram: e.target.value})} />
        <input type="Password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})}/>

        <button onClick={submit} disabled={loading}>
          {loading ? "Loading..." : "Create account"}
        </button>

        <span className={styles.footer}>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
