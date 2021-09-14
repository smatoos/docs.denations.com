import React from "react";
import styles from "./index.module.scss";

function Button(buttonProps) {
  return <button className={styles.button} {...buttonProps}></button>;
}

export default Button;
