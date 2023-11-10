import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

type DashFooterProps = {};

const DashFooter: React.FC<DashFooterProps> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onHomeClicked = () => navigate("/dash");
  let goHomeButton = null;
  if (pathname !== "/dash") {
    goHomeButton = <Button onClick={onHomeClicked}>go Home</Button>;
  }

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      h={"56px"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        {goHomeButton}
      </Container>
    </Box>
  );
};
export default DashFooter;
