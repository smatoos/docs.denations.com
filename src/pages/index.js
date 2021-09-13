import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomePageHeader from "@site/src/components/HomePage/Header";
import Newsletter from "@site/src/components/HomePage/Newsletter";
import "@site/src/css/base.scss";

function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomePageHeader />
      <main className="max-contents-width">
        <section>
          <h2>Documentation</h2>
          <p>
            Explore these docs to get started integrating the DeNations in your
            dApp, smart contract or project.
          </p>
        </section>
        <section>
          <h2>Community</h2>
          <p>
            The DeNations codebase is comprised of an ecosystem of open source
            components.
          </p>
        </section>
        <section>
          <Newsletter />
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
