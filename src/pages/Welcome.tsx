import { Flex, Stack, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
type WelcomeProps = {};

const Welcome: React.FC<WelcomeProps> = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  return (
    <Flex direction={"column"}>
      <div>{today}</div>
      <Stack gap={1}>
        {" "}
        <Button colorScheme="blue" as={Link}>
          View Notes
        </Button>
        <Button colorScheme="blue" as={Link}>
          View User Settings
        </Button>
      </Stack>
    </Flex>
  );
};
export default Welcome;
