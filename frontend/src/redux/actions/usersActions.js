import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}/users`;

export const fetchFeed = () => async (dispatch, getState) => {
  dispatch({ type: "USERS_LOADING" });

  const token = getState().auth.token;

  const res = await axios.get(API, {
    headers: { Authorization: `Bearer ${token}` }
  });

  dispatch({ type: "SET_FEED", payload: res.data });
};

export const likeUser = (id) => async (dispatch, getState) => {
  const token = getState().auth.token;

  const res = await axios.post(`${API}/${id}/like`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });

  dispatch({ type: "REMOVE_USER", payload: id });

  if (res.data.match) {
    dispatch({ type: "SHOW_MATCH", payload: res.data.user });
  }
};

export const skipUser = (id) => async (dispatch, getState) => {
  const token = getState().auth.token;

  await axios.post(`${API}/${id}/skip`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });

  dispatch({ type: "REMOVE_USER", payload: id });
};

export const fetchMatches = () => async (dispatch, getState) => {
  const token = getState().auth.token;

  const res = await axios.get(`${API}/matches`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  dispatch({ type: "SET_MATCHES", payload: res.data });
};

export const updateProfile = (data) => async (dispatch, getState) => {
  const token = getState().auth.token;

  await axios.put(`${API}/profile`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const uploadPhoto = (photo) => async (dispatch, getState) => {
  const token = getState().auth.token;

  await axios.post(`${API}/photo`, { photo }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
