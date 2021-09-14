import React from "react";
import Link from "@docusaurus/Link";
import styles from "./index.module.scss";
import { ExternalLinkIcon, InternalLinkIcon } from "@site/src/components/Icons";
import Card from "../Card";

export function InternalLinkCard({ to, title, description, ...props }) {
  return (
    <Link to={to} className={styles.linkNoDecoration}>
      <Card {...props}>
        <div className={styles.linkContentsWrapper}>
          <div className={styles.linkTitleWrapper}>
            <h3 className={styles.linkTitle}>{title}</h3>
            <InternalLinkIcon size={24} color="var(--ifm-color-emphasis-600)" />
          </div>
          {description && (
            <div className={styles.descriptionWrapper}>
              <p>{description}</p>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}

export function ExternalLinkCard({ to, title, description, ...props }) {
  return (
    <a href={to} target="_blank" className={styles.linkNoDecoration}>
      <Card {...props}>
        <div className={styles.linkContentsWrapper}>
          <div className={styles.linkTitleWrapper}>
            <h3 className={styles.linkTitle}>{title}</h3>
            <ExternalLinkIcon size={24} color="var(--ifm-color-emphasis-600)" />
          </div>
          {description && (
            <div className={styles.descriptionWrapper}>
              <p>{description}</p>
            </div>
          )}
        </div>
      </Card>
    </a>
  );
}
