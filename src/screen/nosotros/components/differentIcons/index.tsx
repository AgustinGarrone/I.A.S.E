import { Flex, Img, Text } from "@chakra-ui/react";
import experts from "../../../../../public/experts.svg";
import teamwork from "../../../../../public/teamwork.svg";
import quality from "../../../../../public/quality.svg";

export const DifferentIcons = () => {
  const data = [
    {
      title: "EXPERTOS TECNOLÓGICOS",
      description:
        "Conformamos equipos de alto rendimiento técnico, en equilibrio con perfiles que entiendan la visión de negocio.",
      img: experts.src,
      titleColor: "orange",
    },
    {
      title: "TALENTO Y TRABAJO EN EQUIPO",
      description:
        "Potenciamos una cultura organizacional con foco en la retención de talentos, desarrollo profesional y mentoría continua.",
      img: teamwork.src,
      titleColor: "green",
    },
    {
      title: "FOCO EN LA CALIDAD",
      description:
        "Nos preocupamos de cada detalle en lo que hacemos y entregamos, asesorando en todo momento a nuestros clientes.",
      img: quality.src,
      titleColor: "yellow",
    },
  ];

  return (
    <Flex
      alignItems="flex-start"
      direction="column"
      h="45em"
      justifyContent="center"
      w="80%"
    >
      <Text color="violet" fontSize={{ base: "2rem", md: "2.3rem" }}>
        LO QUE NOS HACE DIFERENTES
      </Text>
      {data.map((data, index) => {
        return (
          <Flex
            mt="5em"
            h="7em"
            key={index}
            gap="1em"
            w="30em"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Img h="5em" src={data.img} />
            <Flex
              alignItems="flex-start"
              direction="column"
              justifyContent="center"
            >
              <Text color={data.titleColor}>{data.title}</Text>
              <Text color="white">{data.description}</Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
