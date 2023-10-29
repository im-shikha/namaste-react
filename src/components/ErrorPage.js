import React from "react";
import { useRouteError } from "react-router-dom";

import errorimage from "../image_assets/no-fast-food.png";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <div className="error-img-container">
        <img className="error-img" alt="404 image" src={errorimage} />
      </div>
      <div className="error-text">
        <h1>404 Error</h1>
        <h3>Ouch! Page Not Found.</h3>
        <h3>{err.data}</h3>
      </div>
    </div>
  );
};

export default ErrorPage;
