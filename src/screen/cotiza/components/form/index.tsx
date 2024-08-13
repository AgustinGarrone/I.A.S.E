import { Flex, FormControl, Input, Textarea, Button } from "@chakra-ui/react";

export const Form = () => {
  return (
    <Flex
      direction="column"
      width={{ base: "100%", md: "48%" }}
      mx="auto" 
      justifyContent="center"
      alignItems="center"
      h="35em"
      p={6}
      boxShadow="lg"
      borderRadius="md"
      zIndex="1000"
      bg="linear-gradient(190deg, rgba(0,0,0,0.31976540616246496) 0%, rgba(50,35,123,1) 100%)"
    >
      <FormControl id="nombre" mb={4}>
        <Input bg="white" borderRadius="15px" h="3.5em" type="text" placeholder="Ingresa tu nombre completo" />
      </FormControl>

      <FormControl id="empresa" mb={4}>
        <Input bg="white" borderRadius="15px" h="3.5em" type="text" placeholder="Ingresa el nombre de tu empresa" />
      </FormControl>

      <FormControl id="correo" mb={4}>
        <Input bg="white" borderRadius="15px" h="3.5em" type="email" placeholder="Ingresa tu correo electrónico" />
      </FormControl>

      <FormControl id="telefono" mb={4}>
        <Input bg="white" borderRadius="15px" h="3.5em" type="tel" placeholder="Ingresa tu teléfono móvil" />
      </FormControl>

      <FormControl id="proyecto" mb={4}>
        <Textarea bg="white" borderRadius="15px" h="7em" placeholder="Describe tu proyecto con más detalle" size="lg" />
      </FormControl>

      <Button colorScheme="blue" width="40%" h="3em" mt={4}>
        Enviar
      </Button>
    </Flex>
  );
};