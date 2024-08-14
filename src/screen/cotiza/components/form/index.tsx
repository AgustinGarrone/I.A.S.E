import {
  Flex,
  FormControl,
  Input,
  Textarea,
  Button,
  useDisclosure,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    cellphone: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({ type: "", visible: false });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setAlert({ type: "success", visible: true });
      setTimeout(() => {
        setAlert({ type: "", visible: false });
      }, 5000);
      setFormData({
        name: "",
        company: "",
        cellphone: "",
        email: "",
        message: "",
      });
    } else {
      setAlert({ type: "error", visible: true });
      setTimeout(() => {
        setAlert({ type: "", visible: false });
      }, 5000);
    }
  };

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
        <Input
          bg="white"
          value={formData.name}
          onChange={handleChange}
          name="name"
          borderRadius="10px"
          h="3em"
          type="text"
          placeholder="Nombre completo"
        />
      </FormControl>

      <FormControl id="empresa" mb={4}>
        <Input
          bg="white"
          value={formData.company}
          onChange={handleChange}
          name="company"
          borderRadius="15px"
          h="3em"
          type="text"
          placeholder="Empresa"
        />
      </FormControl>

      <FormControl id="correo" mb={4}>
        <Input
          bg="white"
          value={formData.email}
          onChange={handleChange}
          name="email"
          borderRadius="15px"
          h="3em"
          type="email"
          placeholder="Correo electrónico"
        />
      </FormControl>

      <FormControl id="telefono" mb={4}>
        <Input
          bg="white"
          value={formData.cellphone}
          onChange={handleChange}
          name="cellphone"
          borderRadius="15px"
          h="3em"
          type="tel"
          placeholder="Teléfono móvil"
        />
      </FormControl>

      <FormControl id="proyecto" mb={4}>
        <Textarea
          bg="white"
          value={formData.message}
          onChange={handleChange}
          name="message"
          borderRadius="15px"
          h="7em"
          placeholder="Cuéntanos de tu proyecto"
          size="lg"
        />
      </FormControl>

      <Button
        colorScheme="blue"
        onClick={handleSubmit}
        width="40%"
        h="3em"
        mt={4}
      >
        Enviar
      </Button>

      {alert.visible && alert.type === "success" && (
        <Alert status="success" mt={4}>
          <AlertIcon />
          <Box>
            <AlertTitle>Correo envíado con éxito!</AlertTitle>
            <AlertDescription>
              Tus datos fueron enviados. Nos contactaremos en breve!
            </AlertDescription>
          </Box>
        </Alert>
      )}

      {alert.visible && alert.type === "error" && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          <Box>
            <AlertTitle>Error al enviar el correo</AlertTitle>
            <AlertDescription>
              Hubo un problema al enviar tus datos. Intenta de nuevo más tarde.
            </AlertDescription>
          </Box>
        </Alert>
      )}
    </Flex>
  );
};
