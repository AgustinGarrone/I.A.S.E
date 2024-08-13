import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

export const CheckTexts = () => {
  return (
    <Flex
      direction="column"
      color="white"
      alignItems="center"
      justifyContent="flex-start"
      ml="2em"
      mt="1em"
      gap="1em"
    >
      <Flex alignItems="center" fontWeight="bold" gap="1.5em" justifyContent="flex-start">
        <CheckCircleIcon boxSize="20px" />
        <Text>CONSULTORÍA TECNOLÓGICA</Text>
      </Flex>
      <Flex alignItems="center" fontWeight="bold" gap="1.5em" justifyContent="flex-start">
        <CheckCircleIcon boxSize="20px" />
        <Text>CONSULTORÍA TECNOLÓGICA</Text>
      </Flex>
      <Flex alignItems="center" fontWeight="bold" gap="1.5em" justifyContent="flex-start">
        <CheckCircleIcon boxSize="20px" />
        <Text>CONSULTORÍA TECNOLÓGICA</Text>
      </Flex>
      <Flex alignItems="center" fontWeight="bold" gap="1.5em" justifyContent="flex-start">
        <CheckCircleIcon boxSize="20px" />
        <Text>CONSULTORÍA TECNOLÓGICA</Text>
      </Flex>
     
    </Flex>
  );
};
