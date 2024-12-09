import { createHashRouter } from "react-router-dom";

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
        path: "/imprint",
        element: <Imprint />,
      },
      {
        path: "/data-protection",
        element: <DataProtection />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
