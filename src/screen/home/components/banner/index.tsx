import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { CurveSeparator } from "../separator";
import { Experience } from "./experience";

const Banner = () => {
  return (
    <Flex
      mt="5em"
      direction="column"
      gap="1.5em"
      alignItems="center"
      justifyContent="flex-start"
      w="100%"
      h="130vh"
      overflow="hidden"
      backgroundImage="url('/bg-planet.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        bgColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1,
      }}
    >
      <Flex
        zIndex="2"
        gap="4px"
        mt="12em"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="1.5rem" color="gray">
          Convierte tus
        </Text>
        <Text
          fontSize="1.5rem"
          color="white"
          textDecoration="underline"
          textDecorationColor="blue.500"
        >
          ideas en apps
        </Text>
      </Flex>
      <Heading fontSize="3rem" fontWeight="normal" zIndex="2" color="white">
        ACERCA EL FUTURO CON TECNOLOGÍA.
      </Heading>
      <Text fontSize="1.2rem" zIndex="2" color="white">
        Desarrollamos software innovador, seguro y escalable para tu empresa.
      </Text>
      <Flex zIndex="2" alignItems="center" justifyContent="center" gap="1em">
        <Button colorScheme="blue" width="17em" h="3.2em">
          COTIZA TU PROYECTO
        </Button>
        <Button
          colorScheme="blackAlpha"
          border="1px solid blue"
          width="17em"
          h="3.2em"
        >
          VER SERVICIOS
        </Button>
      </Flex>
      <Experience/>
      <CurveSeparator />
    </Flex>
  );
};

export default Banner;
