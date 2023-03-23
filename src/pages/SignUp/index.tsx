import { Box, Flex} from "@chakra-ui/react"
import { useState } from "react"
import { Header } from "../../components/Header"
import { CreateUserForm } from "./CreateUserForm"
import { SucessMessage } from "./SucessMessage"




export const SignUp = () => {
const [isUserCreated, setIsUserCreated] = useState(false)



    return (
        <Box  fontSize="xl" backgroundColor={"gray.900"} minH="100vh">
            <Box py={"64px"} >
                <Header />
                <Flex justify={"center"}  my="12" maxWidth={420} mx="auto" px="6">
                    {isUserCreated ? <SucessMessage/> : <CreateUserForm setIsUserCreated={setIsUserCreated}/>}
                </Flex>
            </Box>
        </Box>
    )
}