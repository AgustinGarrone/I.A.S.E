import { Flex, Img, Text, Button } from "@chakra-ui/react";
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
          contacto@ejemplo.com
        </Text>
        <Flex gap="2">
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

      {/* Sección 3: Ubicación */}
      <Flex alignItems="center" direction="column" textAlign="center" w="33.3%">
        <Flex alignItems="center" justifyContent="center">
          <Img
            src={locationIcon.src}
            alt="Icono de ubicación"
            boxSize="50px"
            objectFit="contain"
          />
          <Text fontSize="1.5rem" fontWeight="bolder">
            La Plata , Argentina
          </Text>
        </Flex>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text mt="2">
            av. A.M. De Justo 740 P.3 Of.1
          </Text>
        </Flex>
      </Flex>
      {/* Sección 4: Otra ubicación */}
     
      <Flex alignItems="center" direction="column" textAlign="center" w="33.3%">
        <Flex alignItems="center" justifyContent="center">
          <Img
            src={locationIcon.src}
            alt="Icono de ubicación"
            boxSize="50px"
            objectFit="contain"
          />
          <Text fontSize="1.5rem" fontWeight="bolder">
            Puerto Madero , Argentina
          </Text>
        </Flex>
        <Flex direction="column" alignItems="center" justifyContent="center">
        <Text mt="2">Av. 38 # 394 La Plata-Bs. As</Text>
        </Flex>
      </Flex>


    </Flex>
  );
};
