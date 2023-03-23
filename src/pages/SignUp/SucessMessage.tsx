import { Heading, Box, Text, Button, VStack, HStack } from "@chakra-ui/react"

export const SucessMessage = () => {
    return (
        <VStack  spacing="16">
            <Box textAlign={"center"}>
                <Heading m="4">Thank you!</Heading>
                <Text>Sucessful Registration. We will soon contact you!</Text>
            </Box>
            <Box>
                <Text fontSize="md" color="gray.500">Stay connected</Text>
                <HStack my="4" spacing="4" >
                    <Button variant="outline" borderColor={"green.700"}>Continue to website</Button>
                    <Button variant="outline" colorScheme={"linkedin"}>LinkedIn</Button>
                </HStack>
            </Box>
        </VStack>
    )
}