import { FormControl, FormLabel, FormErrorMessage, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react"
import { FieldError } from "react-hook-form/dist/types";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
} 


export const Input= ({name, label, ...rest}:InputProps) => {
    return (
        
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <ChakraInput variant='filled'  name={name} id={name} {...rest} colorScheme="green" borderColor="green"  bgColor="gray.800" _hover={{ bgColor: 'gray.700' }} focusBorderColor="green.500" size="lg" />

            {/* { !!error && (  
              <FormErrorMessage>
                {error.message}
              </FormErrorMessage>
            ) } */}
        </FormControl>
    )
}