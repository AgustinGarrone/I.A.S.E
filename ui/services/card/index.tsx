import { Flex, Img , Text } from "@chakra-ui/react"
import { FC } from "react"


type ServiceCardProps = {
    img: string,
    description: string,
    title: string
}

export const ServiceCard : FC<ServiceCardProps> = ({img, description , title}) => {

    return (
        <Flex gap=".5em" width={{base:"100%" , md: "20em" }} direction="column" alignItems="flex-start" justifyContent="center">
            <Img className="animate__animated animate__pulse animate__infinite" src={img} h="6em"/>
            <Text textAlign="left" fontSize="1.5rem" color="blue">{title}</Text>
            <Text textAlign="left" fontSize="1rem" color="white">{description}</Text>
        </Flex>
    )
}