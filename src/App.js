import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BodyComponent from "./components/BodyComponent";
import Header from "./components/Header";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";

import "../index.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div className="app">
      <Header />
      <BodyComponent />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//StrictMode leads to
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
