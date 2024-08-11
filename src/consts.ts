// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "MareSera's blog";
export const SITE_TITLE = "MareSera's blog | 🧊";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "MareSera";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://content.maresera.top/";
export const TRANSITION_API = true;

// Site theme
export const siteTheme = {
  light: "winter",
  dark: "dracula",
};

// Some informative text on the site
export const infoTest = {
  tag: "Tag: ",
  noTag: "untagged",
  tagCard: "Tags",
  tagPage: "Tag - ",
  noCategory: "uncategorized",
  categoryCard: "Categories",
  categoryPage: "Category - ",
  link: "Link: ",
  prevPage: "Recent posts",
  nextPage: "Older posts",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "全部文章",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术文章",
        href: "/blog/categories/技术",
        svg: "heart",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "生活\随笔",
        href: "/blog/categories/生活",
        svg: "heart",
        target: "_self",
      }, // Life category
      {
        id: "ban",
        text: "转载文章",
        href: "/blog/categories/转载",
        svg: "heart",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "Project",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "Friend",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "Contact",
    href: "mailto:contact.evesunmaple@outlook.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://blog.maresera.top/blog/categories/114",
    ariaLabel: "QQ group",
    title: "QQ group",
    svg: "support",
  },
  {
    href: "https://github.com/MareSera",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/1158812072",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
