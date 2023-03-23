import { FormControl, FormLabel, FormErrorMessage, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react"
import { FieldError } from "react-hook-form/dist/types";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldError;
} 

export const Input:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error = null, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput ref={ref} name={name} id={name} {...rest} focusBorderColor="green" bgColor="gray.800" _hover={{ bgColor: 'gray.700' }} size="lg" />

            { !!error && (
              <FormErrorMessage>
                {error.message}
              </FormErrorMessage>
            ) }
        </FormControl>
    )
}