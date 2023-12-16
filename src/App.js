import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import BodyComponent from "./components/BodyComponent";
import Header from "./components/Header";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";

import "../index.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
//import Grocery from "./components/Grocery";

/* Chunking
Code Splitting
Dynamic Bundling
Lazy Loading
On-Demand Loading
Dynamic Import
*/

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//StrictMode leads to
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
