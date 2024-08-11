import { Flex } from "@chakra-ui/react"

export const CurveSeparator = () => {

    return (
        <Flex className="curve_separator"
        backgroundColor="#3b548c"
        borderTopLeftRadius="500% 1000%"
        borderTopRightRadius="500% 1000%"
        position="absolute"
        bottom="0"
        w="100%"
        h="6em"
        mt="-1.5em" 
        zIndex={2}>
        </Flex>
    )
}