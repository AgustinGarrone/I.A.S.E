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
          justifyContent="center"
          h="15em"
          w="15em"
          border="1px solid gray"
        >
          <Text fontSize="3rem">+15</Text>
          <Text fontSize="2rem">Años</Text>
          <Text textAlign="center" fontSize="1.5rem">
            Trabajando
          </Text>
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          h="15em"
          w="15em"
          border="1px solid gray"
        >
          <Text fontSize="3rem">39</Text>
          <Text fontSize="2rem">Clientes</Text>
          <Text textAlign="center" fontSize="1.5rem">
            Diversos tamaños e industrias
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
