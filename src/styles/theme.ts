import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    semanticTokens: {
      colors: {
        error: '#ab222e',
        warning: '#fba94c',
        success: '#00d42c',
        green: {
          500: '#00d42c',
          700: '#007a05',
          300: '#32ee8c',
        },
        gray: {
          900: '#000',
          800: '#000',
          700: '#000',
          500: '#000',
          400: '#000',
          200: '#000',
          100: '#000',
        },
        white: '#ffffff'
      },
    },
  })