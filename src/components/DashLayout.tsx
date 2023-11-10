import React from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

type DashLayoutProps = {};

const DashLayout: React.FC<DashLayoutProps> = () => {
  return (
    <>
      <DashHeader />
      <div>
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
