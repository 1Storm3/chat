import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../styles/Start.module.css";
import axiosInstance from "./configAxios";

const Start = () => {
  return (
    <div>
      <h1 className={styles.heading}>
        <img
          src="https://i.imgur.com/XcdwWvj.png"
          width="120px"
          height="10px"
        />
      </h1>
      <Link to={"/login"}>
        <button className={styles.button}>Авторизация</button>
      </Link>
      <Link to={"/register"}>
        <button className={styles.button}>Регистрация</button>{" "}
      </Link>
    </div>
  );
};

export default Start;
