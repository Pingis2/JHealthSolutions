import { createHashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ScienceTechnology from "./pages/ScienceTechnology";
import CollaborationPartners from "./pages/CollaborationPartners";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/science-technology",
        element: <ScienceTechnology />,
      },
      {
        path: "/collaboration-partners",
        element: <CollaborationPartners />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <Imprint />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
