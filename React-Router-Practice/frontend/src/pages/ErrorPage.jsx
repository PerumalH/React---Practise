import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  const Message =
    error.status === 500
      ? JSON.parse(error.data).message
      : "Could not find resource or page";

  return (
    <div>
      <MainNavigation />
      <main>{Message}</main>
    </div>
  );
};

export default ErrorPage;
