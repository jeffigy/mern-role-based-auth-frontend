import React from "react";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
type PublicProps = {};

const Public: React.FC<PublicProps> = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Welcome to our <br />
            <Text as={"span"} color={"green.400"}>
              repair website
            </Text>
          </Heading>
          <Text color={"gray.500"}>please login to see more</Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              as={Link}
              to={"login"}
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
export default Public;
