import { Box, Center, Text, VStack, Flex, Heading, Divider, SimpleGrid } from "@chakra-ui/react"
import { useState } from "react"
import { Input } from "../../components/Input"

export const SignUp = () => {

    return (
        <Flex textAlign="center" justify="center" fontSize="xl" backgroundColor={"gray.900"} minH="100vh">
            <Center maxW='sm'>
                <Box as="form" flex="1" borderRadius={8} bg="gray.800" p="8" onSubmit={() => { }}>
                    <Heading size="lg" fontWeight="normal">Sign Up</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8" >
                        <SimpleGrid minChildWidth="320px" spacing="8" >
                            <Input name="name" label="Name" placeholder="eg: John Smith" isRequired />
                            <Input name="email" label="E-mail" placeholder="johnsmith@address.com" type="email" />
                            <Input name="password" label="Password" placeholder='x12@5a1xa5d48a!E#' type="password" />
                            <Input name="passwordConfirmation" label="Confirm password" placeholder='x12@5a1xa5d48a!E#' type="password" />
                        </SimpleGrid>
                    </VStack>
                </Box>
            </Center>
            {/* <VStack spacing={8}>
                    <Text>
                        Sign up page
                    </Text>
                </VStack> */}
        </Flex>
    )
}