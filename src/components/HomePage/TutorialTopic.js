import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import Link from "@docusaurus/Link";

function TutorialTopic({ name, description, icon, to }) {
  return (
    <Link className={styles.cardLink} to={to}>
      <div className={styles.shortcutTopic}>
        <div className={styles.iconWrapper}>{icon}</div>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}

TutorialTopic.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.element,
  to: PropTypes.string,
};

export default TutorialTopic;
