import { Button, Flex, Text } from "@chakra-ui/react"


export const Cta = () => {

    return (
        <Flex direction="column" gap="3em" alignItems="center"  color="white" justifyContent="center" w="100%" h="18em" background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(7,50,148,1) 48%, rgba(7,47,146,1) 100%, rgba(0,212,255,1) 100%);">
            <Text fontSize="1.5rem" >¿Buscas una solución a medida?</Text>
            <Button colorScheme="blue" size="lg">Cotizar con nosotros</Button>
        </Flex>
    )
}