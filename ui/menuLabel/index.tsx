import { Box, Flex , Text } from "@chakra-ui/react"
import { FC } from "react"

type MenuLabelProp = {
    title: string
}

export const MenuLabel : FC<MenuLabelProp> = ({title}) => {

    return (
        <Flex ml="11%" gap="1em" alignSelf="flex-start" alignItems="center" justifyContent="center">
        <Box bgColor="blue" h="70%" w=".5em"/>

        <Text textAlign="left" fontSize="2.3rem" color="white">
         {title}
        </Text>
      </Flex>
    )
}