// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pckd - Docs",
  tagline: "Docs for Pckd, the free and open-source URL Shortener",
  url: "https://docs.pckd.me/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PckdHQ", // Usually your GitHub org/user name.
  projectName: "Pckd", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/PckdHQ/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/PckdHQ/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Pckd",
        logo: {
          alt: "Pckd Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "intro",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/PckdHQ/pckd",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://pckd.me/docusaurus-demo",
            label: "Demo",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Walkthrought",
                to: "/walkthrough",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/cqNbdEmazR",
              },
              {
                label: "GitHub Discussions",
                href: "https://github.com/PckdHQ/Pckd/discussions/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/PckdHQ",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/PckdHQ/Pckd",
              },
            ],
          },
          {
            title: "Support Us",
            items: [
              {
                label: "Open Collective",
                href: "https://opencollective.com/pckd",
              },
              { label: "Ko-Fi", href: "https://ko-fi.com/justmohit" },
              {
                label: "GitHub Sponsors",
                href: "https://github.com/sponsors/Just-Moh-it",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Pckd. Brought to you by Mohit, with 🤍`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
