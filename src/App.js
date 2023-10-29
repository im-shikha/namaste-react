import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import BodyComponent from "./components/BodyComponent";
import Header from "./components/Header";

import "../index.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//StrictMode leads to
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
