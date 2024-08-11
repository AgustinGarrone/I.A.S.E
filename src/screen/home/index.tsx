import { Flex } from "@chakra-ui/react"
import { Navbar } from "../../../ui/navbar"
import Banner from "./components/banner"
import { Clients } from "./components/clients"
import { Services } from "../../../ui/services"
import { Footer } from "../../../ui/footer"


export const HomePage = () => {

    return (
        <Flex overflowY="hidden" direction="column" alignItems="center" width="100%" minH="100vh">
            <Navbar/>
            <Banner/>
            <Clients/>
            <Services/>
            <Footer/>
        </Flex>
    )
}