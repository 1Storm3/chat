import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Start.module.css";
import axios from "axios";

const Start = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://chat-online-kjxa.onrender.com/",
        {
          password,
          username,
        }
      );

      if (response.data.message === "true") {
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/sign");
      } else if (response.data.message === "false") {
        alert(" Пароль неверный");
      }
    } catch (error) {
      console.error("error", error);
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
        </form>
      </div>
    </div>
  );
};

export default Start;
