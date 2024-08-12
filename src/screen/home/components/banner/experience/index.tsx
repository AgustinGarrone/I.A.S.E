import { Flex, Text } from "@chakra-ui/react";

export const Experience = () => {
  return (
    <Flex
      mt="14em"
      zIndex="100"
      color="white"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="2em"
    >
      <Text fontSize="2rem">Nuestra Experiencia</Text>
      <Flex gap="2em">
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="20px"
          justifyContent="center"
          h="15em"
          w="15em"
          border=".2px solid gray"
          p="1em"
        >
          <Text fontWeight="bolder" fontSize="5rem">
            +15
          </Text>
          <Text fontSize="2rem">Años</Text>
          <Text fontSize=".8rem" textAlign="center">
            Trabajando
          </Text>
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          h="15em"
          borderRadius="20px"
          w="15em"
          border=".2px solid gray"
          p="1em"
        >
          <Text fontWeight="bolder" fontSize="5rem">
            39
          </Text>
          <Text fontSize="2rem">Clientes</Text>
          <Text fontSize=".8rem" textAlign="center">
            Diversos tamaños e industrias
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
