import { Box, Image, Flex } from  "@chakra-ui/react"
import logo from "../assets/C2O-Logo-W.png"


export const Header = () => {
    return <Flex justify="center" mb="8" >
        <Image maxWidth={"200px"} src={logo}></Image>
    </Flex>
}