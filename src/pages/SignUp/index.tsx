import { Box, Grid, Text, VStack } from "@chakra-ui/react"

export const SignUp = () => {
    return (
        <Box textAlign="center" fontSize="xl" backgroundColor={"gray.900"}>
            <Grid minH="100vh" p={3}>
                <VStack spacing={8}>
                    <Text>
                        Sign up page
                    </Text>
                </VStack>
            </Grid>
        </Box>
    )
}