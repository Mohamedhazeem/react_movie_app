import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Trending } from "./pages/Trending.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { SearchResults } from "./pages/SearchResults.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Details } from "./pages/Detail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
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
        element: <SearchResults />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
