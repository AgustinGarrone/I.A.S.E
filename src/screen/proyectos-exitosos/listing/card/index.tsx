import { ProjectData } from "@/types";
import { Flex, Img, Heading, Text, Badge } from "@chakra-ui/react";

export const ProjectCard = ({ project }: { project: ProjectData }) => {
  return (
    <Flex
      direction="column"
      borderRadius="20px"
      bg="#130d2e"
      h="41em"
      w={{base:"100%" , md:"27em"}}
      border="1px solid blue"
      boxShadow="lg"
      key={project.title}
    >
      <Img
        src={project.img}
        alt={project.title}
        borderRadius="20px 20px 0 0"
        mb="4"
        objectFit="fill"
        h="50%"
        w="100%"
      />

      <Flex p={4} direction="column" alignItems="flex-start" justifyContent="flex-start">
      <Heading as="h2" fontSize="1.5rem" color="white" mb="2">
        {project.title}
      </Heading>

      <Text color="teal.300" mb="2" fontSize="sm">
        {project.company}
      </Text>

      <Text color="gray.200" mb="4" fontSize=".8rem" noOfLines={7}>
        {project.description}
      </Text>

      <Flex wrap="wrap" gap="2" justifySelf="flex-end">
        {project.labels.map((label, idx) => (
          <Badge
            key={idx}
            colorScheme='purple'
            variant="outline"
            fontSize="sm"
            px="2"
            py="1"
          >
            {label}
          </Badge>
        ))}
      </Flex>
      </Flex>
    </Flex>
  );
};
