import { Box, Grid, Text, VStack, Flex, Heading, Divider, SimpleGrid } from "@chakra-ui/react"
import { Input } from "../../components/Input"
import { register } from "../../serviceWorker"

export const SignUp = () => {
    return (
        <Flex textAlign="center" fontSize="xl" backgroundColor={"gray.900"}>

            <Grid minH="100vh" p={3}>
                                    <Box as="form" flex="1" borderRadius={8} bg="gray.800" p="8" onSubmit={()=>{}}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome completo"/>
                            <Input name="email" label="E-mail" type="email"/>
                        </SimpleGrid>
                    </VStack>
                </Box>
                {/* <VStack spacing={8}>
                    <Text>
                        Sign up page
                    </Text>
                </VStack> */}
            </Grid>
        </Flex>
    )
}