import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

export const AboutUsTabs = () => {
    return (
      <Flex h="100%" w="40%">
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              border="1px solid white"
              borderRadius="12px 0 0 0"
              color="white"
              w="50%"
              _selected={{ color: "white", bg: "blue.500" }}
            >
              Misión
            </Tab>
            <Tab
              w="50%"
              border="1px solid white"
              borderRadius="0 12px 0 0" 
              color="white"
              _selected={{ color: "white", bg: "blue.500" }}
            >
              Visión
            </Tab>
          </TabList>
          <TabPanels
            bg="linear-gradient(190deg, rgba(0,0,0,0.31976540616246496) 0%, rgba(50,35,123,1) 100%)"
            border="1px solid white"
            color="white"
            h="40em"
            borderRadius="0 0 12px 12px"
          >
            <TabPanel>
              <Text fontSize="1.5rem" lineHeight="2.5rem">
                Conformar una Organización eficiente, altamente profesionalizada
                en la prestación de Servicios de Ingeniería, que provea soluciones
                integrales a las demandas del mercado, donde el pertenecer a la
                misma sea un elemento cualitativo de distinción en el ámbito
                laboral, con el objeto de permitir a sus clientes que se
                concentren en la realización de sus negocios actuales y en la
                concreción de los nuevos, en la seguridad de que las tareas
                encomendadas a I.A.S.E. S.A. están siendo cumplidas de manera
                eficiente, con costos racionales que no afecten su rentabilidad y,
                en definitiva, que el cliente sienta que entre él y I.A.S.E. S.A.
                se ha formado una alianza estratégica, y no una simple relación
                cliente – proveedor, permaneciendo en el tiempo.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize="1.5rem" lineHeight="2.5rem">
                En el ámbito laboral actual cada vez con mayor frecuencia se
                recurre al outsourcing o tercerización como una estrategia de
                focalizar el accionar de las organizaciones en el negocio que
                realmente se sabe hacer, permitiendo que, quienes se especializan
                en otros temas periféricos a la actividad de cada empresa realicen
                los mismos, logrando así una reducción de costos y de problemas
                inherentes a dichas tareas. En este marco, I.A.S.E. S.A. tiene la
                creencia de que la provisión de servicios como los que brinda,
                altamente profesionalizados, brindados por personas que no
                pertenezcan a la organización del cliente, tiene profundas
                ventajas operativas y económicas rápidamente comprobables por
                quienes deciden recorrer este camino
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    );
  };