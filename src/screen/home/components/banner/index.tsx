'use client'
import { Button, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { CurveSeparator } from "../separator";
import { Experience } from "./experience";
import useRedirectToForm from "@/hooks/useRedirect";

const Banner = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const redirectToForm = useRedirectToForm()


  return (
    <Flex
      mt={{ xl: "1em", "2xl": "5em" }}
      direction="column"
      gap="1.5em"
      alignItems="center"
      justifyContent="flex-start"
      w="100%"
      h={{ base:"80em" , md: "65em", xl: "80em" }}
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
        mt={{base:"8em", md: "12em"}}
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={{base:"1.2rem" , md:"1.5rem"}} color="gray">
          Convierte tus
        </Text>
        <Text
          fontSize={{base:"1.2rem" , md:"1.5rem"}}
          color="white"
          textDecoration="underline"
          textDecorationColor="blue.500"
        >
          ideas en apps
        </Text>
      </Flex>
      <Heading
        textAlign="center"
        className="animate__animated animate__pulse animate__infinite"
        fontSize={{ base: "1.6rem", md: "2.5rem", xl: "3rem" }}
        fontWeight="normal"
        zIndex="2"
        color="white"
      >
        ACERCA EL FUTURO CON TECNOLOGÍA.
      </Heading>
      <Text
        textAlign="center"
        fontSize={{ base: "1rem", md: "1.2rem" }}
        zIndex="2"
        color="white"
      >
        Desarrollamos software innovador, seguro y escalable para tu empresa.
      </Text>
      <Flex w="100%" zIndex="2" alignItems="center" direction={{base:"column" , md:"row"}} justifyContent="center" gap="1em">
        <Button
          colorScheme="blue"
          width={{ base: "80%", md: "12em", xl: "17em" }}
          h={{ base: "3em", md: "3em", xl: "3.2em" }}
          isTruncated
          onClick={redirectToForm}
        >
          {isMobile ? (
          <>COTIZA <br />TU PROYECTO</>
        ) : (
          "COTIZA TU PROYECTO"
        )}
        </Button>
        <Button
          colorScheme="blackAlpha"
          border="1px solid blue"
          width={{ base: "80%", md: "12em", xl: "17em" }}
          h={{ base: "3em", md: "3em", xl: "3.2em" }}
        >
          VER SERVICIOS
        </Button>
      </Flex>
      <Experience />
      <CurveSeparator />
    </Flex>
  );
};

export default Banner;
