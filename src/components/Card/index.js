import React from "react";
import styles from "./index.module.scss";

function Card({ children, ...props }) {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
}

export default Card;
