'use client'
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "../../../ui/navbar";
import { Footer } from "../../../ui/footer";
import { Services } from "../../../ui/services";
import { Specialties } from "./components/specialties";
import { SuccessfulProjects } from "../../../ui/projects";
import { MobileNavbar } from "../../../ui/mobileNavbar";

export const ServicePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      bg="black"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      minH="100vh"
    >
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Box h="7em" bg="black" />
      <Services />
      <Specialties />
      <SuccessfulProjects />
      <Footer />
    </Flex>
  );
};
