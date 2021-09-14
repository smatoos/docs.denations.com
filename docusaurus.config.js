const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */

const title = "DeNations Docs";
const description =
  "DeNations Documentation - Main documentation of DeNations.";
const url =
  process.env.NODE_ENV !== "development"
    ? "https://docs.denations.com"
    : "http://localhost:3000";

module.exports = {
  title,
  url,
  tagline: "",
  baseUrl: "/",
  onBrokenLinks: "throw",
  // onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "smatoos", // Usually your GitHub org/user name.
  projectName: "docs.denations.com", // Usually your repo name.
  // i18n: {
  //   defaultLocale: "en-US",
  //   locales: ["en-US", "ko-KR"],
  //   localeConfigs: {
  //     "en-US": {
  //       label: "English",
  //       direction: "ltr",
  //     },
  //     "ko-KR": {
  //       label: "Korean",
  //       direction: "ltr",
  //     },
  //   },
  // },

  themeConfig: {
    hideableSidebar: true,
    //   gtag: !isDeployPreview
    //   ? {
    //       trackingID: 'UA-141789564-1',
    //     }
    //   : undefined,
    // algolia: {
    //   apiKey: '47ecd3b21be71c5822571b9f59e52544',
    //   indexName: 'docusaurus-2',
    //   contextualSearch: true,
    // },
    // announcementBar: {
    //   id: 'announcementBar-1', // Increment on change
    //   content:
    //     '⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a>! ⭐',
    // },
    colorMode: {
      disableSwitch: false,
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "DENATIONS Logo",
        src: "img/logo-light.svg",
        srcDark: "img/logo.svg",
      },

      items: [
        {
          type: "doc",
          docId: "guide/intro",
          label: "Documentation",
          position: "left",
        },
        {
          type: "doc",
          docId: "tutorial/intro",
          label: "Tutorials",
          position: "left",
        },
        {
          label: "Services",
          position: "left",
          items: [
            {
              label: "DeNations",
              href: "https://denations.com",
            },
            {
              label: "Metaverse(Play)",
              href: "https://denations.com",
            },
            {
              label: "Finance",
              href: "https://finance.denations.com",
            },
            {
              label: "Art Chain",
              href: "https://artchain.denations.com",
            },
          ],
        },
        // {
        //   type: "localeDropdown",
        //   position: "right",
        // },
        {
          label: "Community",
          position: "right",
          items: [
            {
              label: "Blog",
              href: "https://smatoos.medium.com",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/H6MtffFFMx",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/DeNations_DENA",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UC4KXfzAuebs2gMh84dzOEVQ",
            },
            {
              label: "Telegram",
              href: "https://t.me/smatoos",
            },
          ],
        },
        {
          href: "https://github.com/smatoos",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/guide",
            },
            {
              label: "Tutorial",
              to: "/docs/tutorial",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "DeNations",
              href: "https://denations.com",
            },
            {
              label: "Metaverse(Play)",
              href: "https://denations.com",
            },
            {
              label: "Finance",
              href: "https://finance.denations.com",
            },
            {
              label: "Art Chain",
              href: "https://artchain.denations.com",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Blog",
              href: "https://smatoos.medium.com",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/H6MtffFFMx",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/DeNations_DENA",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UC4KXfzAuebs2gMh84dzOEVQ",
            },
            {
              label: "Telegram",
              href: "https://t.me/smatoos",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/smatoos",
            },
            {
              label: "Opensea",
              href: "https://opensea.io/collection/decentralized-nations",
            },
            {
              label: "CoinMarketCap",
              href: "https://coinmarketcap.com/currencies/decentralized-nations",
            },
            {
              label: "Uniswap",
              href: "https://v2.info.uniswap.org/token/0x15f0eedf9ce24fc4b6826e590a8292ce5524a1da",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SMATOOS HONGKONG, Inc.`,
    },
    metadatas: [
      { name: "description", content: description },
      { name: "og:title", content: title },
      { name: "og:type", content: "website" },
      { name: "og:description", content: description },
      { name: "og:image", content: `${url}/img/og_social_card.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${url}/img/twitter_social_card.png` },
    ],
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/smatoos/docs.denations.com/edit/master/website/",
        },
        theme: { customCss: [require.resolve("./src/css/custom.scss")] },
      },
    ],
  ],
};
