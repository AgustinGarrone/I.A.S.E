import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

type MenuLabelProp = {
  title: string;
};

export const MenuLabel: FC<MenuLabelProp> = ({ title }) => {
  return (
    <Flex
      ml={{ base: "5%", md: "11%" }}
      gap="1em"
      w="70%"
      alignSelf="flex-start"
    >
      <Box bgColor="blue" h="3em" w=".5em" />

      <Text
        textAlign={{ base: "center", md: "left" }}
        fontSize={{ base: "2rem", md: "2.3rem" }}
        color="white"
      >
        {title}
      </Text>
    </Flex>
  );
};
