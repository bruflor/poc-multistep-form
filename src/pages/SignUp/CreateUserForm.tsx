import { Box, Center, Text, VStack, Flex, Heading, Divider, SimpleGrid, Button } from "@chakra-ui/react"
import { Input } from "../../components/Input"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"

interface CreateUserFormProps{
    setIsUserCreated: (value: boolean) => void
}

export const CreateUserForm = ({setIsUserCreated}:CreateUserFormProps) => {

    const createUserFormSchema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().required("E-mail is required").email("invalid e-mail"),
        password: yup.string().required("Password is required").min(6, "At least 6 caracters"),
        password_confirmation: yup.string().oneOf([yup.ref('password')],"Passwords need to be the same"),
    })
    
    
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    })
    
    
    const handleCreateUser= () => {
        console.log("Handling")
        setIsUserCreated(true)
    }

    return (
        <Box as="form" flex="1" borderRadius={8} bg="gray.800" px="16" py="8" onSubmit={handleSubmit(handleCreateUser)}>
            <Heading size="lg" fontWeight="normal" >Sign Up</Heading>
            <Text fontSize="md" color={"gray.500"}>Please fill the information below</Text>
            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8" >
                <SimpleGrid minChildWidth="320px" spacing="4" >
                    <Input {...register("name")} label="Your name" placeholder="John Smith" />
                    <Input {...register("email")} label="Your e-mail" placeholder="johnsmith@address.com" type="email" />
                    <Input {...register("password")} label="Password" placeholder='x12aa@5a1#' type="password" />
                    <Input {...register("passwordConfirmation")} label="Repeat the password" placeholder='x12aa@5a1#' type="password" />
                </SimpleGrid>
            </VStack>

            <Button type="submit" mt="8" size="lg" w="100%" variant="solid" backgroundColor={"green.500"} _hover={{ bgColor: 'green.700' }}>Register</Button>
        </Box>
    )
}