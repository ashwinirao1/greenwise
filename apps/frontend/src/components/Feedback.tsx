import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { Container, Flex } from "@chakra-ui/react";
import {
  Footer,
  Instructions,
  Navbar,
  Quiz
} from "./";

export const Feedback = () => {
  return (
    <>
      <Navbar />
      <Flex flex={1}>
        <Container
          mt={{ base: 4, md: 10 }}
          maxW={"container.xl"}
          mb={{ base: 4, md: 10 }}
          display={"flex"}
          flex={1}
          alignItems={"center"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
        >
        <Quiz />
        </Container>
      </Flex>
      <Footer />
    </>
  );
};

