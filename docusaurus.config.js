// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Brody McLemore",
  tagline: "Analytical Chemistry and Computer Science",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.brodymclemore.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BrodyMcLemore", // Usually your GitHub org/user name.
  projectName: "BrodyMcLemore.github.io", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "main",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js"
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: "Brody McLemore",
        logo: {
          alt: "My Site Logo",
          src: "img/logolight.svg"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "about",
            position: "left",
            label: "About Me"
          },
          {
            type: "docSidebar",
            sidebarId: "chem",
            position: "left",
            label: "Chemistry"
          },
          {
            type: "docSidebar",
            sidebarId: "it",
            position: "left",
            label: "Information Technology"
          },
          { to: "/blog", label: "Blog", position: "left" }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Socials",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/brody-mclemore/"
              },
              {
                label: "Github",
                href: "https://github.com/BrodyMcLemore"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brody McLemore. Built with Docusaurus.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true
      }
    })
};

export default config;
