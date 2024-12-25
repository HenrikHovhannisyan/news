import React from "react";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";
import Image from "../Image/Image";

const NewsItem = ({ item }) => {
  return (
    <li className={styles?.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
