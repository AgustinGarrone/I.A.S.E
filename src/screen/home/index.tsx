"use client";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "../../../ui/navbar";
import Banner from "./components/banner";
import { Clients } from "./components/clients";
import { Services } from "../../../ui/services";
import { Footer } from "../../../ui/footer";
import { SuccessfulProjects } from "../../../ui/projects";
import { MobileNavbar } from "../../../ui/mobileNavbar";
import { Cta } from "../../../ui/cta";

export const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      overflowY="hidden"
      bgColor="black"
      direction="column"
      alignItems="center"
      width="100%"
      minH="100vh"
    >
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Banner />
      <Clients />
      <Services />
      <Cta/>
      <SuccessfulProjects />
      <Footer />
    </Flex>
  );
};
