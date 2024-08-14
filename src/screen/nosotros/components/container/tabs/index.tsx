import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaBullseye, FaEye } from "react-icons/fa"; // Importando íconos
import "@splidejs/react-splide/css";
export const AboutUsTabs = () => {
  return (
    <Flex h="100%" w="45%" direction="column" align="center" justify="center">
      <Tabs variant="unstyled" w="100%">
        <TabList mb="1em">
          <Tab
            w="50%"
            fontSize="1.2rem"
            color="white"
            bgGradient="linear(to-r, blue.800, purple.800)"
            borderRadius="12px 12px 0 0"
            p="1.5em"
            _selected={{ color: "white", bg: "blue.500" }}
            _hover={{ bgGradient: "linear(to-r, blue.700, purple.700)" }}
            transition="all 0.3s ease"
          >
            <FaBullseye style={{ marginRight: "8px" }} />
            Misión
          </Tab>
          <Tab
            w="50%"
            fontSize="1.2rem"
            color="white"
            bgGradient="linear(to-r, purple.800, blue.800)"
            borderRadius="12px 12px 0 0"
            p="1.5em"
            _selected={{ color: "white", bg: "purple.500" }}
            _hover={{ bgGradient: "linear(to-r, purple.700, blue.700)" }}
            transition="all 0.3s ease"
          >
            <FaEye style={{ marginRight: "8px" }} />
            Visión
          </Tab>
        </TabList>

        <TabPanels
          bg="rgba(10,10,30,0.95)"
          color="white"
          borderRadius="0 0 12px 12px"
          p="2em"
        >
          <TabPanel
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            h="30em"
          >
            <Text textAlign="left" fontSize="1.3rem" lineHeight="2rem">
              Conformar una Organización eficiente, altamente profesionalizada
              en la prestación de Servicios de Ingeniería, que provea soluciones
              integrales a las demandas del mercado, donde el pertenecer a la
              misma sea un elemento cualitativo de distinción en el ámbito
              laboral.
            </Text>
            <Text mt="1em" textAlign="left" fontSize="1.3rem" lineHeight="2rem">
              Con el objeto de permitir a sus clientes que se concentren en la
              realización de sus negocios actuales y en la concreción de los
              nuevos, en la seguridad de que las tareas encomendadas a I.A.S.E.
              S.A. están siendo cumplidas de manera eficiente, con costos
              racionales que no afecten su rentabilidad y, en definitiva, que el
              cliente sienta que entre él y I.A.S.E. S.A. se ha formado una
              alianza estratégica, y no una simple relación cliente – proveedor,
              permaneciendo en el tiempo.
            </Text>
          </TabPanel>
          <TabPanel
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            h="30em"
          >
            <Text textAlign="left" fontSize="1.3rem" lineHeight="2rem">
              En el ámbito laboral actual cada vez con mayor frecuencia se
              recurre al outsourcing o tercerización como una estrategia de
              focalizar el accionar de las organizaciones en el negocio que
              realmente se sabe hacer, permitiendo que, quienes se especializan
              en otros temas periféricos a la actividad de cada empresa realicen
              los mismos, logrando así una reducción de costos y de problemas
              inherentes a dichas tareas.
            </Text>
            <Text mt="1em" textAlign="left" fontSize="1.3rem" lineHeight="2rem">
              En este marco, I.A.S.E. S.A. tiene la creencia de que la provisión
              de servicios como los que brinda, altamente profesionalizados,
              brindados por personas que no pertenezcan a la organización del
              cliente, tiene profundas ventajas operativas y económicas
              rápidamente comprobables por quienes deciden recorrer este camino
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
