import { Flex } from "@chakra-ui/react"
import { DifferentIcons } from "./differentIcons"
import { AboutUsTabs } from "./tabs"


export const AboutUsContainer = () => {

    return (
        <Flex w="85%" h="45em" mb="10em" alignItems="center" justifyContent="center" gap="1.5em">
            <DifferentIcons/>
            <AboutUsTabs/>
        </Flex>
    )
}