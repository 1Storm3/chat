import React from "react";
import styles from "../styles/RequestBD.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const RequestBD = () => {
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
      .catch((err) => console.log("error"));
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
        <h1 className={styles.head}>Введите данные</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="userName"
            value={formName}
            onChange={handleChangeName}
            className={styles.input}
            placeholder="Имя"
            required
            pattern="\S+.*"
          />

          <input
            type="text"
            surname="surName"
            value={formSurname}
            onChange={handleChangeSurname}
            className={styles.input}
            placeholder="Фамилия"
            required
            pattern="\S+.*"
          />
          <button type="submit" className={styles.submit}>
            Отправить!
          </button>
        </form>
        <Link to={"/"}>
          <button className={styles.back}>Назад</button>
        </Link>
      </div>
    </div>
  );
};

export default RequestBD;
