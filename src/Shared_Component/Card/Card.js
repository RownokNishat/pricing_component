import React from "react";
import styles from "./Card.module.css";

const Card = ({ packageDetails }) => {
  const {
    packageTitle,
    packagePrice,
    usageStorage,
    userNumber,
    sendUpMemory,
    middleCard,
  } = packageDetails;
  return (
    <div className={middleCard ? styles.middle_card_div : styles.card_div}>
      <h3 className={styles.card_title}>{packageTitle}</h3>

      <h1 className={styles.card_price_text}>
        <span id={styles.dolar_sign}>$</span>{" "}
        <span id={styles.card_price}>{packagePrice}</span>
      </h1>
      <hr />
      <p className={styles.card_text}>{usageStorage} Storage</p>
      <hr />
      <p className={styles.card_text}>{userNumber} Users Allowed</p>
      <hr />
      <p className={styles.card_text}>Send up to {sendUpMemory}</p>
      <hr />
      <button
        className={middleCard ? styles.mild_card_button : styles.card_button}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default Card;
