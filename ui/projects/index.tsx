import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { PreviewCard } from "./components/previewCard";
import { PREVIEW_PROJECTS_DATA } from "./data";
import { MenuLabel } from "../menuLabel";
import useRedirect from "@/hooks/useRedirect";

export const SuccessfulProjects = () => {

  const {redirectToProjects} = useRedirect()

  return (
    <Flex
      bg="black"
      w="100%"
      h={{base:"80em" , md: "50em"}}
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="3em"
      mt={{base:"2em" , md: "6em"}}
    >
      <MenuLabel title="PROYECTOS EXITOSOS"/>
      <Grid
        templateColumns={{base: "repeat(1,1fr) " , md: "repeat(2, 1fr)"}}
        templateRows={{base:"repeat(3,1fr)" , md:"repeat(2, 1fr)"}}
        gap="3em"
        h="65%"
        w="80%"
        p={4}
      >
       <GridItem
        colSpan={1} 
        rowSpan={{ base: 1, md: 2 }} 
        gridArea={{ base: "1 / 1 / 2 / 2", md: "1 / 1 / 3 / 2" }} 
      >
        <PreviewCard {...PREVIEW_PROJECTS_DATA[0]} />
      </GridItem>

      <GridItem
        colSpan={1} 
        rowSpan={1} 
        gridArea={{ base: "2 / 1 / 3 / 2", md: "1 / 2 / 2 / 3" }} 
      >
        <PreviewCard {...PREVIEW_PROJECTS_DATA[1]} />
      </GridItem>

      <GridItem
        colSpan={1} 
        rowSpan={1} 
        gridArea={{ base: "3 / 1 / 4 / 2", md: "2 / 2 / 3 / 3" }}
      >
        <PreviewCard {...PREVIEW_PROJECTS_DATA[2]} />
      </GridItem>
      </Grid>
      <Button onClick={redirectToProjects} mb="4em" colorScheme="blue">Ver más proyectos</Button>
    </Flex>
  );
};
