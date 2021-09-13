import {
  ArtIcon,
  CardsIcon,
  EarthIcon,
  FinanceIcon,
} from "@site/src/components/Icons";

export const tutorialTopics = [
  {
    name: "NFTs",
    description: "General info for players",
    to: "/docs/tutorial/how-to-own-nations",
    icon: {
      size: 56,
      name: CardsIcon,
      color: "var(--ifm-color-line-icon)",
      pointColor: "var(--ifm-color-danger)",
    },
  },
  {
    name: "Metaverse(Play)",
    description: "General info for players",
    to: "/docs/tutorial/metaverse/Sign%20up%20&%20Log%20in",
    icon: {
      size: 56,
      name: EarthIcon,
      color: "var(--ifm-color-line-icon)",
      pointColor: "var(--ifm-color-info)",
    },
  },
  {
    name: "Finance",
    description: "General info for players",
    to: "/docs/tutorial/finance/Liquidity%20Farming",
    icon: {
      size: 56,
      name: FinanceIcon,
      color: "var(--ifm-color-line-icon)",
      pointColor: "var(--ifm-color-primary)",
    },
  },
  {
    name: "Artchain",
    description: "General info for players",
    to: "/docs/tutorial/artchain/congratulations",
    icon: {
      size: 56,
      name: ArtIcon,
      color: "var(--ifm-color-line-icon)",
      pointColor: "var(--ifm-color-warning)",
    },
  },
];
