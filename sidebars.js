/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  about: [
    {
      type: "category",
      label: "About Me",
      link: {
        type: "generated-index",
        title: "About Me",
        description: "Documents about me",
        slug: "/category/about"
      },
      items: ["about/about", "about/education"]
    }
  ],
  chem: [
    {
      type: "category",
      label: "Chemistry",
      link: {
        type: "generated-index",
        title: "Chemistry",
        description: "Documents about my experiences and work in chemistry",
        slug: "/category/chem"
      },
      items: [
        {
          type: "category",
          label: "Work",
          link: {
            type: "generated-index",
            title: "Previous Work Experience",
            slug: "/category/chem/work",
            description:
              "Descriptions of my previous chemistry work experiences"
          },
          items: ["chem/work/siemens", "chem/work/orthodyne"]
        },
        "chem/research",
        "chem/internship"
      ]
    }
  ],
  it: [
    {
      type: "category",
      label: "Information Technology",
      link: {
        type: "generated-index",
        title: "Information Technology",
        description:
          "Documents about my experiences and work in the Information Technology sector",
        slug: "/category/it"
      },
      items: [
        {
          type: "category",
          label: "Work",
          link: {
            type: "generated-index",
            title: "Previous Work Experience",
            slug: "/category/it/work",
            description: "Descriptions of my previous IT work experiences"
          },
          items: ["it/work/sta", "it/work/orthodyne"]
        },
        "it/home-lab"
      ]
    }
  ]
};

export default sidebars;
