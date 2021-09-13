import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import TutorialTopic from "./TutorialTopic";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { tutorialTopics } from "../../constants";

function HomePageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroContents}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            DeNations Documentation
          </h1>
          <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
            Get started with tutorials about the various topics in each of these
            sections.
          </p>
        </div>
        <div className={styles.heroShortcuts}>
          {tutorialTopics.map(({ icon, ...tutorialTopic }) => (
            <TutorialTopic icon={<icon.name {...icon} />} {...tutorialTopic} />
          ))}
        </div>
      </div>
      <div
        className={styles.heroBG}
        style={{
          background: `url(${useBaseUrl(
            "/img/hero-bg.png"
          )}) no-repeat center 20%/cover`,
        }}
      />
    </header>
  );
}

export default HomePageHeader;
