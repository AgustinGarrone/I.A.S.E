'use client'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";
import 'animate.css';



type PreviewCardProps = {
  company: string;
  img: string;
  description: string;
  animationName: string
};

export const PreviewCard: FC<PreviewCardProps> = ({
  company,
  img,
  description,
  animationName
}) => {

  return (
    <Flex
    className={animationName}
    border="0.2px solid gray"
    position="relative"
      width="100%" // Ajusta el tamaño según tus necesidades
      height="100%" // Ajusta el tamaño según tus necesidades
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <Img
        src={img} // Cambia esto por la ruta de tu imagen
        alt="Background Image"
        objectFit="cover"
        width="100%"
        height="100%"
        filter="brightness(30%)" // Oscurece la imagen
        position="absolute"
        top="0"
        left="0"
      />
      <Flex
        position="absolute"
        top="0"
        left="0"
        direction="column"
        width="100%"
        height="100%"
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        color="white"
        zIndex="1"
        padding="4"
        p="1em"
      >
        <Text fontSize={{md:"2rem",xl:"3rem"}}  textAlign="left">
          {company.toUpperCase()}
        </Text>
        <Text fontSize=".8rem" textAlign="left">
          {description}
        </Text>
        <Flex alignSelf="flex-end" mt="1em">
            <Button rightIcon={<ArrowForwardIcon />}  border="1px solid white" borderRadius="50px" colorScheme="blackAlpha">Descubre Más</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
