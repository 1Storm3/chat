import React from "react";
import styles from "../styles/Login.module.css";
import { useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "./configAxios";

export const UserContext = createContext("");

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post(
        "https://chat-online-kjxa.onrender.com/login",
        // "http://localhost:81",
        {
          password,
          username,
        }
      );
      console.log(response.data.message);
      if (response.data.message === "true") {
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/sign");
      } else {
        setErrorMessage("Пароль неверный");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Пароль или логин неверный!");
        setPassword("");
      } else {
        console.error("error", error);
      }
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <img
            src="https://i.imgur.com/XcdwWvj.png"
            width="120px"
            height="10px"
          />
        </h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Логин"
            className={styles.input}
            autoComplete="off"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className={styles.input}
            autoComplete="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className={styles.submit}>
            Войти
          </button>
          <Link to={"/"}>
            <button className={styles.submit}>Назад</button>
          </Link>
        </form>
        {errorMessage && (
          <div
            style={{
              color: "black",
              backgroundColor: "#ffe6e6",
              padding: "10px",
              border: "1px solid #ff4d4d",
              borderRadius: "10px",
              margin: "10px 0",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {errorMessage}
          </div>
        )}
        <div className="copyright">
          Developed by{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 64 64"
          >
            <path d="M32,10c12.15,0,22,9.85,22,22s-9.85,22-22,22s-22-9.85-22-22S19.85,10,32,10z M39.589,40.968 c0.404-1.241,2.301-13.615,2.534-16.054c0.071-0.738-0.163-1.229-0.619-1.449c-0.553-0.265-1.371-0.133-2.322,0.21 c-1.303,0.47-17.958,7.541-18.92,7.951c-0.912,0.388-1.775,0.81-1.775,1.423c0,0.431,0.256,0.673,0.96,0.924 c0.732,0.261,2.577,0.82,3.668,1.121c1.05,0.29,2.243,0.038,2.913-0.378c0.709-0.441,8.901-5.921,9.488-6.402 c0.587-0.48,1.056,0.135,0.576,0.616c-0.48,0.48-6.102,5.937-6.844,6.693c-0.901,0.917-0.262,1.868,0.343,2.249 c0.689,0.435,5.649,3.761,6.396,4.295c0.747,0.534,1.504,0.776,2.198,0.776C38.879,42.942,39.244,42.028,39.589,40.968z"></path>
          </svg>
          <a href="https://t.me/StormEV" target="_blank" className="">
            STORM
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
