import React from "react";
import { useLocation } from "react-router-dom";
import { get } from "lodash";

const ErrorHandler = ({ children }) => {
  const location = useLocation();

  switch (get(location.state, "errorStatusCode")) {
    case 404:
      console.log("404");
      return <div>404</div>;
    case 500:
      console.log("500");
      return <div>500</div>;
    default:
      return children;
  }
};

export default ErrorHandler;
