import { Flex, Text } from "@chakra-ui/react"


export const Services = () => {

    return (
        <Flex bg="black"   w="100%"  h="20em" direction="column" alignItems="center" justifyContent="center">
            <Flex ml="10ema" alignItems="center" justifyContent="flex-start">
                <Text fontSize="2rem" color="white">Nuestros Servicios</Text>
            </Flex>
        </Flex>
    )
}