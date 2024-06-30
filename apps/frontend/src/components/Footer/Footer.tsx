"use client";
import {
  VStack,
  Text,
  Container,
  HStack,
  Box,
  Show,
  Link,
  Flex,
} from "@chakra-ui/react";

import { DiscordButton } from "./components/DiscordButton";
import { TelegramButton } from "./components/TelegramButton";
import { Socials } from "./components/Socials";
import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS_LINK } from "../../const";
import { BeBetterVeBetterIcon } from "../Icon";

export const Footer: React.FC = () => {
  const desktopContent = (<VStack>
    <VStack spacing={4} my={4}>
    
    </VStack>
    <VStack borderTopColor={"#3e3c3a"} borderTopWidth={1} py={8}>
      <Link href={PRIVACY_POLICY_LINK} isExternal>
        <Text
          fontWeight={400}
          fontSize="14px"
          lineHeight="17px"
          color="#000000"
          as="u"
          cursor={"pointer"}
        >
          Privacy & Policy
        </Text>
      </Link>
      <Link href={TERMS_AND_CONDITIONS_LINK} isExternal>
        <Text
          fontWeight={400}
          fontSize="14px"
          lineHeight="17px"
          color="#000000"
          as="u"
          cursor={"pointer"}
        >
          Terms & Conditions
        </Text>
      </Link>
      <Text
        fontWeight={400}
        fontSize="14px"
        lineHeight="17px"
        color="#000000"
        mt={6}
      >
       Powered by VeChain | 2024 Green Wise. All rights reserved.
      </Text>
    </VStack>
  </VStack>
  );

  const mobileContent = (
    <VStack>
      <VStack spacing={4} my={4}>
      
      </VStack>
      <VStack borderTopColor={"#3e3c3a"} borderTopWidth={1} py={8}>
        <Link href={PRIVACY_POLICY_LINK} isExternal>
          <Text
            fontWeight={400}
            fontSize="14px"
            lineHeight="17px"
            color="#000000"
            as="u"
            cursor={"pointer"}
          >
            Privacy & Policy
          </Text>
        </Link>
        <Link href={TERMS_AND_CONDITIONS_LINK} isExternal>
          <Text
            fontWeight={400}
            fontSize="14px"
            lineHeight="17px"
            color="#000000"
            as="u"
            cursor={"pointer"}
          >
            Terms & Conditions
          </Text>
        </Link>
        <Text
          fontWeight={400}
          fontSize="14px"
          lineHeight="17px"
          color="#000000"
          mt={6}
        >
          Powered by VeChain | 2024 Green Wise. All rights reserved.
        </Text>
      </VStack>
    </VStack>
  );

  return (
    <Flex bgColor={"#5f9a39"}>
      <Container
        maxW={"container.xl"}
        display={"flex"}
        alignItems={"stretch"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Show above="md">{desktopContent}</Show>
        <Show below="md">{mobileContent}</Show>
      </Container>
    </Flex>
  );
};
