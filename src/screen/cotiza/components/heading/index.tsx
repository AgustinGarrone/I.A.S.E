import { CheckCircleIcon } from "@chakra-ui/icons"
import { Flex, Heading, Text } from "@chakra-ui/react"
import { CheckTexts } from "./checkTexts"


export const FormHeading = () => {

    return (
        <Flex w="50%" gap="1.3em" color="white" zIndex="1000" direction="column" alignItems="flex-start" justifyContent="flex-start" h="100%">
            <Heading fontSize="3.2rem" fontWeight="normal">CUÉNTANOS SOBRE TU <br/> PROYECTO</Heading>
            <Text fontSize="1.1rem">Completa el formulario a continuación y te enviaremos una invitación para reunirnos.</Text>
           <CheckTexts/>
        </Flex>
    )
}