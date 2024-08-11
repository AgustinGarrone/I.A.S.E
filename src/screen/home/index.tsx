import { Flex } from "@chakra-ui/react"
import { Navbar } from "../../../ui/navbar"
import Banner from "./components/banner"
import { CurveSeparator } from "./components/separator"
import { Clients } from "./components/clients"


export const HomePage = () => {

    return (
        <Flex direction="column" alignItems="center" width="100%" h="100vh">
            <Navbar/>
            <Banner/>
            <Clients/>
        </Flex>
    )
}