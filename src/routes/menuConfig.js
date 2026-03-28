export const menuItems = [
  { path: "/", label: "Home" },

  {
    path: "/services",
    label: "Services",
    children: [
      { path: "/services/web-dev", label: "Web Dev" },
      { path: "/services/testing", label: "Testing" },
    ],
  },

  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];