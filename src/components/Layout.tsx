import React from "react";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  //   children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = () =>
  // { children }
  {
    return <Outlet />;
    //   <div>{children}</div>;
  };
export default Layout;
