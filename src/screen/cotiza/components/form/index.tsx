import { Flex, FormControl, Input, Textarea, Button } from "@chakra-ui/react";

export const Form = () => {
  return (
    <Flex
      direction="column"
      width={{ base: "100%", md: "47%" }}
      mx="auto" 
      justifyContent="center"
      alignItems="center"
      h="40em"
      gap=".7em"
      p={6}
      boxShadow="lg"
      borderRadius="md"
      zIndex="1000"
      border="1px solid rgba(128, 128, 128, 0.2)"
      bg="linear-gradient(190deg, rgba(0,0,0,0.31976540616246496) 0%, rgba(50,35,123,1) 100%)"
    >
      <FormControl id="nombre" mb={4}>
        <Input bg="white" borderRadius="10px" h="3em" type="text" placeholder="Nombre completo" />
      </FormControl>

      <FormControl id="empresa" mb={4}>
        <Input bg="white" borderRadius="15px" h="3em" type="text" placeholder="Empresa" />
      </FormControl>

      <FormControl id="correo" mb={4}>
        <Input bg="white" borderRadius="15px" h="3em"  type="email" placeholder="Correo electrónico" />
      </FormControl>

      <FormControl id="telefono" mb={4}>
        <Input bg="white" borderRadius="15px" h="3em"  type="tel" placeholder="Teléfono móvil" />
      </FormControl>

      <FormControl id="proyecto" mb={4}>
        <Textarea bg="white" borderRadius="15px" h="7em" placeholder="Cuéntanos de tu proyecto" size="lg" />
      </FormControl>

      <Button colorScheme="blue" width="40%" h="3em" mt={4}>
        Enviar
      </Button>
    </Flex>
  );
};