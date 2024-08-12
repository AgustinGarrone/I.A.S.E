import { Flex, Img, Text } from "@chakra-ui/react"
import { SPECIALITIES_DATA } from "./data"


export const Specialties = () => {

    return (
        <Flex h="20em" w="80%" direction="column" alignItems="center" justifyContent="center" gap="3em">
            <Text alignSelf="flex-start" color="white" fontSize="2rem">ESPECIALIDADES TÉCNICAS</Text>
            <Flex direction={{ base: "column", md: "row" }} wrap="wrap" gap="4" w="100%">
                {SPECIALITIES_DATA.map((s, index) => (
                    <Flex
                        gap="1em"
                        key={index}
                        alignItems="center"
                        justifyContent="center"
                        p={1}
                        border="1px solid gray"
                        borderRadius="15px"
                        bg={s.color}
                        color="white"
                    >
                        {/* Asegúrate de ajustar esto para que muestre los datos correctos */}
                        <Img h="50%" src={s.img}/>
                        <Text fontSize="md" fontWeight="bold">{s.title}</Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}