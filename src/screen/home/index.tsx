import { Flex } from "@chakra-ui/react"
import { Navbar } from "../../../ui/navbar"
import Banner from "./components/banner"
import { Clients } from "./components/clients"
import { Services } from "../../../ui/services"
import { Footer } from "../../../ui/footer"
import { SuccessfulProjects } from "../../../ui/projects"


export const HomePage = () => {

    return (
        <Flex overflowY="hidden" bgColor="black" direction="column" alignItems="center" width="100%" minH="100vh">
            <Navbar/>
            <Banner/>
            <Clients/>
            <Services/>
            <SuccessfulProjects/>
            <Footer/>
        </Flex>
    )
}