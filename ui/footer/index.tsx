import { Flex, Img, Text, Button, Divider } from "@chakra-ui/react";
import logo from "../../public/logo.png";
import locationIcon from "../../public/ubi.svg";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      h="14em"
      as="footer"
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      p="4"
      bg="gray.800"
      color="white"
    >
      {/* Sección 1: Logo */}
      <Flex direction="column" w="33.3%" alignItems="center">
        <Img
          src={logo.src}
          alt="Logo de la marca"
          boxSize="100px"
          objectFit="contain"
        />
      </Flex>

      {/* Sección 2: Contacto y redes sociales */}
      <Flex
        direction="column"
        w="33.3%"
        alignItems="flex-start"
        textAlign="center"
      >
        <Text>Escribenos a </Text>
        <Text color="lightblue" mb="2">
        infoiasesa@gmail.com
        </Text>
        <Flex gap="2" mt="2em">
          <Button
            as="a"
            href="https://linkedin.com"
            target="_blank"
            colorScheme="blue"
            variant="outline"
          >
            LinkedIn
          </Button>
          <Button
            as="a"
            href="https://instagram.com"
            target="_blank"
            colorScheme="pink"
            variant="outline"
          >
            Instagram
          </Button>
          <Button
            as="a"
            href="https://twitter.com"
            target="_blank"
            colorScheme="twitter"
            variant="outline"
          >
            Twitter
          </Button>
        </Flex>
      </Flex>
      <Divider colorScheme="gray" orientation="vertical" />

      {/* Sección 3: Ubicación */}
      <Flex alignItems="center" justifyContent="center" gap="1em" w="33.3%">
        <Flex alignItems="center" justifyContent="center" w="20%" gap="1em">
          <Img
            src={locationIcon.src}
            alt="Icono de ubicación"
            boxSize={{xl:"50px" , "2xl":"50px"}}
            objectFit="contain"
          />
          
        </Flex>
        <Flex direction="column" alignItems="flex-start" justifyContent="center">
        <Text fontSize="1.4rem" fontWeight="bolder">
            Buenos Aires
          </Text>
          <Text mt="2">av. A.M. De Justo 740 P.3 Of.1</Text>
        </Flex>
      </Flex>
      {/* Sección 4: Otra ubicación */}
      <Divider colorScheme="gray" orientation="vertical" />

      <Flex alignItems="center" justifyContent="center" gap="1em" w="33.3%">
        <Flex alignItems="center" justifyContent="center" w="20%" gap="1em">
          <Img
            src={locationIcon.src}
            alt="Icono de ubicación"
            boxSize={{xl:"50px" , "2xl":"50px"}}
            objectFit="contain"
          />
          
        </Flex>
        <Flex direction="column" alignItems="flex-start" justifyContent="center">
        <Text fontSize="1.4rem" fontWeight="bolder">
            La Plata
          </Text>
          <Text mt="2">av. 38 n 999</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
