'use client'
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { MobileNavbar } from "../../../ui/mobileNavbar";
import { Navbar } from "../../../ui/navbar";
import { Footer } from "../../../ui/footer";

export const ProjectsPage = () => {
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

      <Footer />
    </Flex>
  );
};
