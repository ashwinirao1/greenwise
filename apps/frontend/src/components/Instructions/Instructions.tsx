import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.png",
    title: "Prepare sustainibility document",
    description: "Get your eco-friendly and sustainable pic/book/article from any of socials with #sustainable hashtag.",
  },
  {
    icon: "/steps/2.svg",
    title: "Upload your sustainibility document",
    description: "Upload your document or pic and AI will verify if it's valid.",
  },
  {
    icon: "/steps/3.svg",
    title: "Earn rewards",
    description: "You did it! Now Earn B3TR for purchasing eco-friendly products.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex
        p={{ base: 4 }}
        w="100%"
        direction={{ base: "column", md: "row" }}
      >
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
