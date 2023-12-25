import React from "react";
import styles from "../styles/RequestBD.module.css";
import { useState } from "react";

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
      <h1 className={styles.head}>Введите данные</h1>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="userName"
            value={formName}
            onChange={handleChangeName}
            className={styles.input}
            placeholder="Имя"
          />

          <input
            type="text"
            surname="surName"
            value={formSurname}
            onChange={handleChangeSurname}
            className={styles.input}
            placeholder="Фамилия"
          />
          <button type="submit" className={styles.submit}>
            Отправить!
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestBD;
