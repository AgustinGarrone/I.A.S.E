'use client'
import { Flex, useBreakpointValue } from "@chakra-ui/react"
import { Navbar } from "../../../ui/navbar"
import Banner from "./components/banner"
import { Clients } from "./components/clients"
import { Services } from "../../../ui/services"
import { Footer } from "../../../ui/footer"
import { SuccessfulProjects } from "../../../ui/projects"
import { MobileNavbar } from "../../../ui/mobileNavbar"


export const HomePage = () => {
    const isMobile = useBreakpointValue(
        {
          base: 'outline',
          md: 'solid',
        },
        {
          // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
          // (Defaults to 'base')
          fallback: 'md',
        },
      )

    return (
        <Flex overflowY="hidden" bgColor="black" direction="column" alignItems="center" width="100%" minH="100vh">
            {
                isMobile ? (
                    <MobileNavbar/>
                ) : <Navbar/>
            }
            <Banner/>
            <Clients/>
            <Services/>
            <SuccessfulProjects/>
            <Footer/>
        </Flex>
    )
}