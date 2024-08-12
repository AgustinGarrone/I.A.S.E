import { Flex, Img, Text, Button, Divider } from "@chakra-ui/react";
import logo from "../../public/logo.png";
import locationIcon from "../../public/ubi.svg";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      minH="14em"
      as="footer"
      direction={{base:"column", md:"row"}}
      alignItems="center"
      justifyContent={{base:"center" , md:"space-around"}}
      p="4"
      bg="gray.800"
      color="white"
      gap={{base:"2em", md:"0"}}
    >
      {/* Sección 1: Logo */}
      <Flex direction="column" w={{base:"100%" , md:"33.3%"}} alignItems="center" justifyContent="center">
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
        w={{base:"100%" , md:"33.3%"}}
        alignItems={{base:"center" , md:"flex-start" }}justifyContent="center"
        textAlign="center"
      >
        <Text>Escribenos a </Text>
        <Text color="lightblue" mb="2">
        infoiasesa@gmail.com
        </Text>
        <Flex gap="2" mt="2em">
          <Button
          size={{md:"xs" , xl:"l"}}
            as="a"
            href="https://linkedin.com"
            target="_blank"
            colorScheme="blue"
            variant="outline"
          >
            LinkedIn
          </Button>
          <Button
          size={{md:"xs" , xl:"l"}}
            as="a"
            href="https://instagram.com"
            target="_blank"
            colorScheme="pink"
            variant="outline"
          >
            Instagram
          </Button>
          <Button
          size={{md:"xs" , xl:"l"}}
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
      <Flex alignItems="center" justifyContent="flex-start" gap="1em"  w={{base:"100%" , md:"33.3%"}}>
        <Flex alignItems="center" justifyContent="center" w="20%" gap="1em">
          <Img
            src={locationIcon.src}
            alt="Icono de ubicación"
            boxSize={{base:"40px", xl:"50px" , "2xl":"50px"}}
            objectFit="contain"
          />
          
        </Flex>
        <Flex direction="column" alignItems="flex-start" justifyContent="center">
        <Text fontSize={{md:"1.1rem" , xl: "1.4rem"}} fontWeight="bolder">
            Buenos Aires
          </Text>
          <Text mt="2" fontSize={{md:".8rem" , xl:"1rem"}}>av. A.M. De Justo 740 P.3 Of.1</Text>
        </Flex>
      </Flex>
      {/* Sección 4: Otra ubicación */}
      <Divider colorScheme="gray" orientation="vertical" />

      <Flex alignItems="center" justifyContent="flex-start"  gap="1em"  w={{base:"100%" , md:"33.3%"}}>
        <Flex alignItems="center" justifyContent="center" w="20%" gap="1em">
          <Img
            src={locationIcon.src}
            alt="Icono de ubicación"
            boxSize={{base:"40px", xl:"50px" , "2xl":"50px"}}
            objectFit="contain"
          />
          
        </Flex>
        <Flex direction="column" alignItems="flex-start" justifyContent="center">
        <Text fontSize={{md:"1.1rem" , xl: "1.4rem"}} fontWeight="bolder">
            La Plata
          </Text>
          <Text mt="2" fontSize={{md:".8rem" , xl:"1rem"}}>av. 38 n 999</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
