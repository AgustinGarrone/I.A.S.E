import { Flex, Img, Text } from "@chakra-ui/react";
import { SPECIALITIES_DATA } from "./data";

export const Specialties = () => {
  return (
    <Flex
      minH="20em"
      w="80%"
      direction="column"
      alignItems="center"
      mt={{ base: "10em", md: "6em", "2xl": "0" }}
      justifyContent="center"
      gap="3em"
      mb="4em"
    >
      <Text alignSelf="flex-start" color="white" fontSize="2rem">
        ESPECIALIDADES TÉCNICAS
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        gap="4"
        w="100%"
      >
        {SPECIALITIES_DATA.map((s, index) => (
          <Flex
            gap="1em"
            key={index}
            alignItems="center"
            justifyContent="flex-start"
            p={1}
            border="1px solid gray"
            borderRadius="15px"
            h={{ md: "3.4em" , xl: "4em"}}
            w={{ base: "100%", md: "20em" , xl:"20em" }}
            bg={s.color}
            color="white"
          >
            <Img h={{ base: "40%", md: "60%" }} src={s.img} />
            <Text fontSize="md" fontWeight="bold">
              {s.title}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
