import { Flex } from "@chakra-ui/react"
import { DifferentIcons } from "./differentIcons"
import { AboutUsTabs } from "./tabs"


export const AboutUsContainer = () => {

    return (
        <Flex w="85%" h="50em" mb="10em" direction={{base:"column" , md:"row"}} alignItems="flex-start" justifyContent="center" gap="1.5em">
            <DifferentIcons/>
            <AboutUsTabs/>
        </Flex>
    )
}