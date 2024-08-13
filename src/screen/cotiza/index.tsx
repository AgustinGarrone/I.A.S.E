'use client'
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { MobileNavbar } from "../../../ui/mobileNavbar";
import { Navbar } from "../../../ui/navbar";
import { Footer } from "../../../ui/footer";
import { FormContainer } from "./components/container";

export const FormPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      w="100%"
      minH="100vh"
    >
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <FormContainer/>
      <Footer />
    </Flex>
  );
};
