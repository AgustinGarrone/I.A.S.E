import { Flex, useBreakpointValue , Text} from "@chakra-ui/react";
import { MobileNavbar } from "../../../ui/mobileNavbar";
import { Navbar } from "../../../ui/navbar";
import { Footer } from "../../../ui/footer";
import { Summary } from "./components/summary";
import { Cta } from "../../../ui/cta";
import { AboutUsContainer } from "./components/container";

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
      
      <Flex w="80%">
      <Text color="violet" alignSelf="flex-start" fontSize={{ base: "2rem", md: "2.3rem" }}>
        LO QUE NOS HACE DIFERENTES
      </Text>
      </Flex>
      <AboutUsContainer/>
      <Cta/>
      <Footer/>
    </Flex>
  );
};
