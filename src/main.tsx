import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import { Home } from "./pages/Home.tsx";
import { Trending } from "./pages/Trending.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Searchresults } from "./pages/SearchResults.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/not_found",
        element: <NotFound />,
      },
      {
        path: "/searchresults",
        element: <Searchresults />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
