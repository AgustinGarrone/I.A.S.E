import { Box, Button, Flex, Img, Link } from "@chakra-ui/react";
import logo from "../../public/logo.png";

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      h="5em"
      padding="1.5rem"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      backgroundColor="#0e3748"
      boxShadow="sm"
      zIndex="1000"
      color="white"
    >
      <Flex alignItems="center" justifyContent="center" gap="1em" h="100%">
        <Img h="150%" src={logo.src} />
        <Link href="/" fontSize="xl" fontWeight="bold">
          I.A.S.E
        </Link>
      </Flex>

      <Box as="ul" display="flex" listStyleType="none" alignItems="center" justifyContent="center" gap="4rem">
        {/* Navigation Links */}
        <Box as="li">
          <Link href="/">Inicio</Link>
        </Box>
        <Box as="li">
          <Link href="/servicios">Servicios</Link>
        </Box>
        <Box as="li">
          <Link href="/nosotros">Nosotros</Link>
        </Box>
        <Button colorScheme="teal" variant="solid">
          Cotizar Proyecto
        </Button>
      </Box>
    </Flex>
  );
};
