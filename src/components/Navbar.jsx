import { Flex, Box, Heading, Text, Button, Spacer, HStack } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" >
      <Heading as="h1">Tore Turkmen</Heading>
      
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">T</Box>
        <Text>...@mail.com</Text>
        <Button colorScheme="blue">Logout</Button>
      </HStack>
      
    </Flex>
    
  )
}
