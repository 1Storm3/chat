import React from "react";
import { useEffect, useRef } from "react";
import styles from "../styles/Messages.module.css";

const Messages = ({ messages, name, time }) => {
  const messagesRef = useRef(null);
  const scrollToBottom = () => {
    messagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className={styles.messages}>
      {messages.map(({ user, message, time }, i) => {
        const itsMe =
          user.name.trim().toLowerCase() === name.trim().toLowerCase();
        const className = itsMe ? styles.me : styles.user;

        return (
          <div key={i} className={`${styles.message} ${className}`}>
            <div ref={messagesRef} />
            <span className={styles.user}>{user.name}</span>
            <div className={styles.text}>{message}</div>
            <span className={styles.time}>{time}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
