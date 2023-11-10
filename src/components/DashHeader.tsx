import { Box, useColorModeValue } from "@chakra-ui/react";

import React from "react";

type DashHeaderProps = {};

const DashHeader: React.FC<DashHeaderProps> = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      this is the header
    </Box>
  );
};
export default DashHeader;
