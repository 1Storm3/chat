import React from "react";
import styles from "../styles/RequestBD.module.css";
import { useState } from "react";

const RequestBD = () => {
  const [formName, setFormName] = useState("");
  const [formSurname, setFormSurname] = useState("");

  const SendRequest = () => {
    fetch("http://127.0.0.1:5000/request/querry", {
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
    <div>
      <h1 className={styles.head}>Введите данные</h1>
      <form onSubmit={handleSubmit}>
        <label>Имя</label>

        <input
          type="text"
          name="userName"
          value={formName}
          onChange={handleChangeName}
          className={styles.input}
        />

        <label>Фамилия</label>
        <input
          type="text"
          surname="surName"
          value={formSurname}
          onChange={handleChangeSurname}
          className={styles.input}
        />
        <button type="submit" className={styles.submit}>
          Отправить!
        </button>
      </form>
    </div>
  );
};

export default RequestBD;
