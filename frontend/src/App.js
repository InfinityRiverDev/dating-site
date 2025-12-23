import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Ankets from "./components/Ankets/Ankets";
import Likes from "./components/Likes/Likes";
import CreateAnket from "./components/CreateAnket/CreateAnket";
import PrivateRoute from "./components/PrivateRoute";
import Music from "./components/Music/Music";

import { getMe } from "./redux/actions/authActions";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  const dispatch = useDispatch();

  // 🔥 ВОТ ЭТО ОБЯЗАТЕЛЬНО
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />

        <Route
          path="/ankets"
          element={
            <PrivateRoute>
              <Ankets />
            </PrivateRoute>
          }
        />

        <Route
          path="/likes"
          element={
            <PrivateRoute>
              <Likes />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <CreateAnket />
            </PrivateRoute>
          }
        />
      </Routes>

      <Music />
    </BrowserRouter>
  );
};

export default App;
