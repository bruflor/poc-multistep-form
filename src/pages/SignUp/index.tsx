import { Box, Center, Text, VStack, Flex, Heading, Divider, SimpleGrid, Button } from "@chakra-ui/react"
import { useState } from "react"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

export const SignUp = () => {

    return (
        <Flex direction="column" align={"center"} fontSize="xl" backgroundColor={"gray.900"} minH="100vh">
            <Center flexDirection="column" maxW='sm' margin={"auto"}>
                <Header />
                {/* <Heading size="lg" fontWeight="normal" >Sign Up</Heading> */}
                <Box as="form" flex="1" borderRadius={8} bg="gray.800" px="16" py="8" onSubmit={() => { }}>
                    <Text color={"gray.500"}>Please fill the information below</Text>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8" >
                        <SimpleGrid minChildWidth="320px" spacing="4" >
                            <Input name="name" label="Your name" placeholder="eg: John Smith" isRequired />
                            <Input name="email" label="Your e-mail" placeholder="johnsmith@address.com" type="email" />
                            <Input name="password" label="Password" placeholder='x12aa@5a1#' type="password" />
                            <Input name="passwordConfirmation" label="Repeat your password" placeholder='x12aa@5a1#' type="password" />
                        </SimpleGrid>
                    </VStack>

                    <Button mt="8" size="lg" w="100%" variant="solid" backgroundColor={"green.500"} _hover={{ bgColor: 'green.700' }}>Register</Button>
                </Box>
            </Center>
        </Flex>
    )
}