"use client";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Img,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../public/logo.png";
import useRedirect from "@/hooks/useRedirect";

export const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {redirectToForm} = useRedirect();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      h="6em"
      px="4"
      position="fixed"
      top="0"
      left="0"
      right="0"
      backgroundColor="black"
      boxShadow="sm"
      zIndex="1000"
      color="white"
    >
      <Flex alignItems="center">
        <Img h="3em" src={logo.src} />
        <Link href="/" fontSize="xl" fontWeight="bold" ml="2">
          I.A.S.E
        </Link>
      </Flex>

      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        variant="outline"
        colorScheme="whiteAlpha"
        color="white"
        display={{ base: "inline-flex", md: "none" }}
      />

      {/* Mobile Menu Drawer */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        pos="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="black"
        p="4"
        zIndex="1200"
        overflowY="auto"
      >
        <Flex justify="flex-end">
          <IconButton
            aria-label="Close Menu"
            icon={<CloseIcon />}
            onClick={onClose}
            variant="outline"
            colorScheme="whiteAlpha"
            color="white"
          />
        </Flex>
        <Stack spacing="4" mt="4">
          <Link href="/" onClick={onClose}>
            Inicio
          </Link>
          <Link href="/servicios" onClick={onClose}>
            Servicios
          </Link>
          <Link href="/nosotros" onClick={onClose}>
            Nosotros
          </Link>
          <Link onClick={onClose} href="/proyectos-exitosos">
            Proyectos exitosos
          </Link>

          <Button
            colorScheme="teal"
            variant="solid"
            width="100%"
            onClick={() => {
              redirectToForm()
              onClose()
            }}
          >
            Cotizar Proyecto
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};
