import { Flex, Text } from "@chakra-ui/react";
import { MenuLabel } from "../../../../../ui/menuLabel";

export const Summary = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      color="white"
      gap="1em"
      justifyContent="center"
      w="100%"
      h="30em"
    >
      <MenuLabel title="SOBRE NOSOTROS" />
      <Text ml="2.1em" w="80%">
        INGENIERIA APLICADA A SISTEMAS DE ENERGIA S.A. (I.A.S.E. S.A.) es la
        continuación lógica del accionar de reconocidos profesionales de la
        ingeniería eléctrica con más de veinticinco años promedio en la
        profesión, que desarrollaban su quehacer como profesionales
        independientes denominaciones
      </Text>
      <Text ml="2.1em" w="80%">
        Quienes integran esta Sociedad Anónima han participado por si mismos, en
        asociación con terceros y/o en participación empresaria en firmas de
        reconocido prestigio en un sinnúmero de proyectos, obras y servicios en
        distintos ámbitos de actuación en el sector electro energético,
        experiencia ésta que brindan a sus clientes a partir de I.A.S.E. S.A.
        una nueva organización cuyo objetivo es la eficiencia y la excelencia en
        la prestación de sus servicios
      </Text>
    </Flex>
  );
};
