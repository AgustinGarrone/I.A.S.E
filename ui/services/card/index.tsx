import { Flex, Img , Text } from "@chakra-ui/react"
import { FC } from "react"

type ServiceCardProps = {
    img: string,
    description: string,
    title: string
}

export const ServiceCard : FC<ServiceCardProps> = ({img, description , title}) => {

    return (
        <Flex gap=".5em" width="20em" direction="column" alignItems="flex-start" justifyContent="center">
            <Img src={img} h="6em"/>
            <Text fontSize="1.5rem" color="blue">{title}</Text>
            <Text fontSize="1rem" color="white">{description}</Text>
        </Flex>
    )
}