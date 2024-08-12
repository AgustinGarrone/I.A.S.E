'use client'
import { Flex, Text } from "@chakra-ui/react"
import { SimpleCarrousel } from "../../../../../ui/navbar/simpleCarrousel"


export const Clients = () => {

    return (
        <Flex direction="column"
        w="100%"
        gap="2em"
        zIndex="100"
        h={{ base:"16em", md:"18em",xl:"20em"}}
        alignItems="center"
        justifyContent="center"
        backgroundImage="linear-gradient(to bottom, #261a5c, black)">
            <Text fontSize="1.2rem" color="white">CONFÍAN EN I.A.S.E</Text>
        <SimpleCarrousel/>
        </Flex>
    )
}