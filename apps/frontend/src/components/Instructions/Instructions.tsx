import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.svg",
    title: "Did you learn something about sustainability?",
    description: "Take a screenshot of something that you recently learnt and upload it. The environment thanks you for learning more about how to care for it.",
  }
  // {
  //   icon: "/steps/2.svg",
  //   title: "Upload your sustainibility document",
  //   description: "",
  // },
  // {
  //   icon: "/steps/3.svg",
  //   title: "Earn rewards",
  //   description: "",
  // },
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
