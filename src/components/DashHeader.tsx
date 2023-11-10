import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

import React from "react";

type DashHeaderProps = {};

const DashHeader: React.FC<DashHeaderProps> = () => {
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      h={"56px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text>this is the header</Text>
    </Flex>
  );
};
export default DashHeader;
