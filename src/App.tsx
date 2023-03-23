import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { SignUp } from "./pages/SignUp"
import { theme } from "./styles/theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <SignUp />
  </ChakraProvider>
)
