import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { SignUp } from "./pages/SignUp"
import { customTheme } from "./styles/customTheme"

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <SignUp />
  </ChakraProvider>
)
