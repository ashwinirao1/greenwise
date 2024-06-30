import { Box, Container, HStack, Image } from "@chakra-ui/react";
import { ConnectWalletButton } from "./ConnectWalletButton";


export const Navbar = () => {
  return (
    <Box
      px={0}
      position={"sticky"}
      top={0}
      zIndex={10}
      py={4}
      h={"auto"}
      w={"full"}
      bg={"#f7f7f7"}
    >
      <Container
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={"center"}
        maxW={"container.xl"}
      >
        <HStack flex={1} justifyContent={"start"}>
          <Image src="/logo.png" h={50} w={50} borderRadius={16} />
        </HStack>

        <HStack flex={1} spacing={4} justifyContent={"end"}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Green Wise</h1>
        </HStack>
      </Container>
    </Box>
  );
};
