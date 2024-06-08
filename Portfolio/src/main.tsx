import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Index from "./components/Index.tsx";
import BlogsPage from "./components/BlogsPage.tsx";
import ProjectsPage from "./components/ProjectsPage.tsx";
import AdminPage from "./components/AdminPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
      /* existing routes */
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
