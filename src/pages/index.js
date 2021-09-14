import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomePageHeader from "@site/src/components/HomePage/Header";
import Newsletter from "@site/src/components/HomePage/Newsletter";
import { InternalLinkCard } from "../components/Link/Card";
import { docs } from "../constants";
import styles from "./index.module.scss";
import clsx from "clsx";

function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomePageHeader />
      <main className={clsx("max-contents-width", styles.main)}>
        <section className={styles.section}>
          <h2>Documentation</h2>
          <div className={styles.linkListWrapper}>
            {docs.map((doc) => (
              <InternalLinkCard title={doc.name} to={doc.to} />
            ))}
          </div>
        </section>

        {/* <section className={styles.section}>
          <Newsletter />
        </section> */}
      </main>
    </Layout>
  );
}

export default HomePage;
