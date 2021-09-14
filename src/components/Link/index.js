import React from "react";
import Link from "@docusaurus/Link";
import styles from "./index.module.scss";
import { ExternalLinkIcon, InternalLinkIcon } from "@site/src/components/Icons";

export function InternalLink({ children, to }) {
  return (
    <Link to={to}>
      <div className={styles.linkWrapper}>
        {children}
        <InternalLinkIcon size={24} color="var(--ifm-color-primary)" />
      </div>
    </Link>
  );
}

export function ExternalLink({ children, to }) {
  return (
    <a href={to} target="_blank">
      <div className={styles.linkWrapper}>
        {children}
        <ExternalLinkIcon size={24} color="var(--ifm-color-primary)" />
      </div>
    </a>
  );
}
