import { Flex, Text } from "@chakra-ui/react";

export const Experience = () => {
  return (
    <Flex
      mt={{base:"7em", xl: "10em", "2xl": "14em" }}
      zIndex="100"
      color="white"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="2em"
    >
      <Text fontSize={{base:"1.4rem",md: "2rem"}}>Nuestra Experiencia</Text>
      <Flex gap="2em" direction={{base:"column" , md:"row"}}>
        <Flex
          className="animate__animated animate__fadeInLeft"
          direction="column"
          alignItems="center"
          borderRadius="20px"
          justifyContent="center"
          h={{base:"12em", md:"15em"}}
          w={{base:"12em", md:"15em"}}
          border=".2px solid gray"
          p="1em"
        >
          <Text fontWeight="bolder" fontSize={{base:"3.5rem" , md:"5rem"}}>
            +15
          </Text>
          <Text fontSize="2rem" textAlign="center">Años</Text>
          <Text fontSize=".8rem" textAlign="center">
            Trabajando
          </Text>
        </Flex>
        <Flex
          className="animate__animated animate__fadeInRight"
          direction="column"
          alignItems="center"
          justifyContent="center"
          h={{base:"12em", md:"15em"}}
          w={{base:"12em", md:"15em"}}
          borderRadius="20px"
          border=".2px solid gray"
          p="1em"
        >
          <Text fontWeight="bolder" fontSize={{base:"3.5rem" , md:"5rem"}}>
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
