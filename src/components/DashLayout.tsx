import React from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import { Flex } from "@chakra-ui/react";

type DashLayoutProps = {};

const DashLayout: React.FC<DashLayoutProps> = () => {
  return (
    <>
      <DashHeader />
      <Flex h={"calc(100vh - 112px)"} justifyItems={"center"}>
        <Outlet />
      </Flex>
      <DashFooter />
    </>
  );
};
export default DashLayout;
