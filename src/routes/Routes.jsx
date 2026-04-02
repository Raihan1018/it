import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import WebDev from "../pages/Services/WebDev/WebDev";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        label: "Home",
      },
      {
        path: "services",
        Component: Services,
        label: "Services",
      },
      {
        path: "about",
        Component: AboutUs,
        label: "About",
      },
      {
        path: "projects",
        Component: Projects,
        label: "Projects",
      },
      {
        path: "contact",
        Component: Contact,
        label: "Contact",
      },
      {
        path: "services/web-dev",
        Component: WebDev,
      },
      {
        path: "services/ai",
        Component: () => <div>AIPage</div>, // Fixed Component syntax
      },
    ],
  },
]);
