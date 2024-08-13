import { Flex } from "@chakra-ui/react"
import { Form } from "../form"
import { FormHeading } from "../heading"


export const FormContainer = () => {

    return (
        <Flex
        mt={{ xl: "1em", "2xl": "5em" }}
        alignItems="center"
        justifyContent="center"
        w="100%"
        h={{ base:"80em" , md: "65em", xl: "52em" }}
        overflow="hidden"
        backgroundImage="url('/bg-planet.png')"
        backgroundSize="cover"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          bgColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      >
        <Flex alignItems="center" justifyContent="center" w="80%">
        <FormHeading/>
        <Form/>
        </Flex>
      </Flex>
    )
}