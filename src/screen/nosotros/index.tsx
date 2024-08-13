import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { MobileNavbar } from "../../../ui/mobileNavbar";
import { Navbar } from "../../../ui/navbar";
import { Footer } from "../../../ui/footer";
import { Summary } from "./components/summary";
import { DifferentIcons } from "./components/differentIcons";
import { Cta } from "../../../ui/cta";

export const AboutUsPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      w="100%"
      minH="100vh"
      bg="black"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Summary/>
      <DifferentIcons/>
      <Cta/>
      <Footer/>
    </Flex>
  );
};
