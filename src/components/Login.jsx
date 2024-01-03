import React from "react";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formName, setFormName] = useState("");
  const [formSurname, setFormSurname] = useState("");

  const SendRequest = () => {
    fetch("https://chat-online-kjxa.onrender.com/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formName,
        surname: formSurname,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log("error", err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    SendRequest();
    alert("Запрос отправлен");
  };

  const handleChangeName = (event) => {
    setFormName(event.target.value);
  };
  const handleChangeSurname = (event) => {
    setFormSurname(event.target.value);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.containerDB}>
        <h1 className={styles.head}>Авторизация</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="userName"
            value={formName}
            onChange={handleChangeName}
            className={styles.input}
            placeholder="Логин"
            required
            pattern="\S+.*"
          />

          <input
            type="text"
            surname="surName"
            value={formSurname}
            onChange={handleChangeSurname}
            className={styles.input}
            placeholder="Пароль"
            required
            pattern="\S+.*"
          />
          <button type="submit" className={styles.submit}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
