import React from "react";
import styles from "./index.module.scss";

export function InputText(inputTextProps) {
  return <input className={styles.inputText} {...inputTextProps} />;
}
