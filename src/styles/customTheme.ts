import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    semanticTokens: {
      colors: {
        error: '#ab222e',
        warning: '#fba94c',
        success: '#00d42c',
        green: {
          default: '#00d42c',
          _dark: '#007a05',
          light: '#32ee8c',
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