import React from "react";
import Button from "../Button";
import Card from "../Card";
import { InputText } from "../Form";
import styles from "./index.module.scss";

function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <h3 className={styles.newsletterTitle}>DeNations Newsletter</h3>
      <p className={styles.newsletterDescription}>
        Subscribe to the latest news about DeNations
      </p>
      <form className={styles.newsletterForm}>
        <InputText
          type="email"
          placeholder="Email Address"
          autoComplete="email"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
}

export default Newsletter;
