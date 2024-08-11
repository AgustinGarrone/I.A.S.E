import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { CurveSeparator } from "../separator";

const Banner = () => {
  return (
    <Flex
    mt="5em"
    direction="column"
    gap="1.5em"
    alignItems="center"
    justifyContent="flex-start"
    w="100%"
    minH="130vh"    backgroundImage="url('/bg-planet.png')"
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    position="relative"
    _before={{
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      w: '100%',
      h: '100%',
      bgColor: 'rgba(0, 0, 0, 0.6)', // Ajusta la opacidad aquí
      zIndex: 1,
    }}
    >
      <Flex zIndex="2" gap="4px" mt="8em" alignItems="center" justifyContent="center">
        <Text color="white">Convierte</Text>
        <Text color="white" textDecoration="underline">
          tus ideas en apps
        </Text>
      </Flex>
      <Heading zIndex="2"  color="white">ACERCA EL FUTURO CON TECNOLOGÍA.</Heading>
      <Text zIndex="2"  color="white">
        Desarrollamos software innovador, seguro y escalable para tu empresa.
      </Text>
      <Flex  zIndex="2" alignItems="center" justifyContent="center" gap="1em">
        <Button>COTIZAR PROYECTO</Button>
        <Button>VER SERVICIOS</Button>
      </Flex>
      <CurveSeparator/>
    </Flex>
  );
};

export default Banner;
