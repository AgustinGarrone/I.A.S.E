import { Button, Flex, Text } from "@chakra-ui/react";

import { ServiceCard } from "./card";
import { SERVICES } from "./data";
import { MenuLabel } from "../menuLabel";

export const Services = () => {
  return (
    <Flex
      bg="black"
      w="100%"
      h={{md:"45em",xl:"40em"}}
      direction="column"
      gap="4em"
      mt={{ md: "1em", xl: 0 }}
      alignItems="center"
      justifyContent="center"
    >
      <MenuLabel title="NUESTROS SERVICIOS" />
      <Flex gap="2em" alignItems="center" w="77%" justifyContent="flex-start">
        {SERVICES.map((s, index) => {
          return <ServiceCard {...s} key={index} />;
        })}
      </Flex>
      <Button w="13em" h="3em">
        Ver más Información
      </Button>
    </Flex>
  );
};
