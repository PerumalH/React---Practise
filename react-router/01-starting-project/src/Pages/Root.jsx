import React from "react";
import MainHeader from "../Components/MainHeader";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
