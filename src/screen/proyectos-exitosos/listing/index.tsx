// @ts-ignore
import { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse"; // Para parsear el CSV
import { Flex, Img, Text } from "@chakra-ui/react";
import { ProjectCard } from "./card";
import { ProjectData } from "@/types";
import { MenuLabel } from "../../../../ui/menuLabel";

export const ProjectList = () => {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  const [error, setError] = useState<string>("");

  // URL del CSV
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcdSPCoc8QEAzcoTfkJMb1PZT09LBKDZeQveqSIOldGvG9U0X9xzprbVPX-dG-BX7hLK8Hq68eweos/pub?output=csv";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        Papa.parse(response.data, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const rows = results.data.map((row: any) => ({
              title: row["Título"] || "",
              company: row["Empresa"] || "",
              img: row["URL Imagen"] || "",
              labels: (row["Etiquetas"] || "").split(",") || [],
              description: row["Descripción"] || "",
            }));
            console.log(rows);
            setProjectData(rows);
          },
          error: (error) => {
            setError(`Error al procesar el CSV: ${error.message}`);
          },
        });
      } catch (error) {
        if (error instanceof Error) {
          setError(`Error al obtener el archivo CSV: ${error.message}`);
        } else {
          setError("Error desconocido al obtener el archivo CSV");
        }
      }
    };

    fetchData();
  }, [url]);

  return (
    <Flex
      mt="4em"
      alignItems="center"
      direction="column"
      p="2em"
      justifyContent="center"
      minH="60em"
      w="100%"
      gap="2em"
    >
      <MenuLabel title="PROYECTOS EXITOSOS" />
      <Text
        alignSelf="flex-start"
        ml="10%"
        textAlign="left"
        fontSize="1.4rem"
        color="white"
      >
        Algunos casos de éxito de empresas que han confiado en nosotros
      </Text>
      {error && <p>{error}</p>}
      <Flex
        w="80%"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
        wrap="wrap"
        gap="4em"
      >
        {projectData.map((project, index) => {
          console.log(project.title);
          return <ProjectCard project={project} key={index} />;
        })}
      </Flex>
    </Flex>
  );
};
