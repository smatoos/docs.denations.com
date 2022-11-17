import {
  ArtIcon,
  CardsIcon,
  EarthIcon,
  FinanceIcon,
  HexagonIcon,
} from "@site/src/components/Icons";

export const tutorialTopics = [
  {
    name: "NFTs",
    description: "Buy & Trade core assets of DeNations",
    to: "/docs/tutorial/nfts",
    icon: {
      size: 56,
      name: CardsIcon,
      color: "var(--ifm-color-line-icon)",
      pointColor: "var(--ifm-color-danger)",
    },
  },
  {
    name: "Metaverse(Play)",
    description: "Run nations and earn taxes",
    to: "/docs/tutorial/metaverse",
    icon: {
      size: 56,
      name: EarthIcon,
      color: "var(--ifm-color-line-icon)",
      pointColor: "var(--ifm-color-info)",
    },
  },
  {
    name: "Land",
    description:
      "A digital form of the earth’s surface in DeNations metaverse.",
    to: "/docs/tutorial/land",
    icon: {
      size: 56,
      name: HexagonIcon,
      color: "var(--ifm-color-line-icon)",
      pointColor: "var(--ifm-color-primary)",
    },
  },
  {
    name: "Finance",
    description: "Trade and farm tokens and NFTs",
    to: "/docs/tutorial/finance",
    icon: {
      size: 56,
      name: FinanceIcon,
      color: "var(--ifm-color-line-icon)",
      pointColor: "var(--ifm-color-warning)",
    },
  },
  {
    name: "Art Chain",
    description: "NFT art blocks issued by talented artists",
    to: "/docs/tutorial/artchain",
    icon: {
      size: 56,
      name: ArtIcon,
      color: "var(--ifm-color-line-icon)",
      pointColor: "var(--ifm-color-primary-light)",
    },
  },
];

export const docs = [
  {
    name: "Play to Earn(MetaFi)",
    to: "/docs/guide/play-to-earn",
  },
  {
    name: "Ecosystem",
    to: "/docs/guide/ecosystem",
  },
  {
    name: "Tokenomics",
    to: "/docs/guide/tokenomics",
  },
  {
    name: "NFT",
    to: "/docs/guide/nft",
  },
  {
    name: "Governance",
    to: "/docs/guide/governance",
  },
  {
    name: "Roadmap",
    to: "/docs/guide/roadmap",
  },
];
