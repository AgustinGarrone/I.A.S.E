import { Button, Flex, Text } from "@chakra-ui/react";

import { ServiceCard } from "./card";
import { SERVICES } from "./data";

export const Services = () => {
  return (
    <Flex
      bg="black"
      w="100%"
      h="40em"
      direction="column"
      gap="4em"
      alignItems="center"
      justifyContent="center"
    >
      <Flex ml="10ema" alignItems="center" mt="4em" justifyContent="flex-start">
        <Text fontSize="2rem" color="white">
          Nuestros Servicios
        </Text>
      </Flex>
      <Flex gap="2em" alignItems="center" justifyContent="flex-start">
        {SERVICES.map((s, index) => {
          return <ServiceCard {...s} key={index} />;
        })}
      </Flex>
      <Button w="13em" h="3em">Ver más Información</Button>
    </Flex>
  );
};
