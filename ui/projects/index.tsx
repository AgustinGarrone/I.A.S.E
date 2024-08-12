import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { PreviewCard } from "./components/previewCard";
import { PREVIEW_PROJECTS_DATA } from "./data";
import { MenuLabel } from "../menuLabel";

export const SuccessfulProjects = () => {
  return (
    <Flex
      bg="black"
      w="100%"
      h="50em"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="3em"
      mt="6em"
    >
      <MenuLabel title=" PROYECTOS EXITOSOS"/>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap="3em"
        h="65%"
        w="80%"
        p={4}
      >
        <GridItem gridArea="1/1/3/2">
          {/* Elemento que ocupa la primera columna y dos filas */}
          <PreviewCard {...PREVIEW_PROJECTS_DATA[0] } />
        </GridItem>

        <GridItem gridArea=" 1 / 2 / 2 / 3">
          {/* Elemento que ocupa la primera columna y dos filas */}
          <PreviewCard {...PREVIEW_PROJECTS_DATA[1]} />
        </GridItem>
        <GridItem gridArea="2/2/3/3">
          {/* Elemento que ocupa la primera columna y dos filas */}
          <PreviewCard {...PREVIEW_PROJECTS_DATA[2]} />
        </GridItem>
      </Grid>
      <Button mb="4em" colorScheme="blue">Ver más proyectos</Button>
    </Flex>
  );
};
