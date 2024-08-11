"use client";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: JSX.Element }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
