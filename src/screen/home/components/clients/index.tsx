'use client'
import { Flex, Text } from "@chakra-ui/react"
import { SimpleCarrousel } from "../../../../../ui/navbar/simpleCarrousel"


export const Clients = () => {

    return (
        <Flex direction="column"
        w="100%"
        zIndex="100"
        h="15em"
        alignItems="center"
        justifyContent="center"
        backgroundImage="linear-gradient(to bottom, #261a5c, black)">
            <Text color="white">Confian en I.A.S.E</Text>
        <SimpleCarrousel/>
        </Flex>
    )
}