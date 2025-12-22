import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}/auth`;

export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: "AUTH_START" });

    const res = await axios.post(`${API}/register`, data);
    localStorage.setItem("token", res.data.token);

    const me = await axios.get(`${API}/me`, {
      headers: { Authorization: `Bearer ${res.data.token}` }
    });

    dispatch({
      type: "AUTH_SUCCESS",
      payload: { token: res.data.token, user: me.data }
    });
  } catch (e) {
    dispatch({ type: "AUTH_ERROR", payload: "Register error" });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "AUTH_START" });

    const res = await axios.post(`${API}/login`, { email, password });
    localStorage.setItem("token", res.data.token);

    const me = await axios.get(`${API}/me`, {
      headers: { Authorization: `Bearer ${res.data.token}` }
    });

    dispatch({
      type: "AUTH_SUCCESS",
      payload: { token: res.data.token, user: me.data }
    });
  } catch {
    dispatch({ type: "AUTH_ERROR", payload: "Login error" });
  }
};

export const getMe = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    dispatch({ type: "AUTH_START" });

    const res = await axios.get(`${API}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    dispatch({
      type: "AUTH_SUCCESS",
      payload: { token, user: res.data }
    });
  } catch {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: "LOGOUT" };
};
