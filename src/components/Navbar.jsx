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
    // <Flex bg="gray.300" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="100px" bg="blue">1</Box>
    //   <Box w="150px" h="100px" bg="gray">2</Box>
    //   <Box w="150px" h="100px" flexGrow="1" bg="yellow">3</Box>
    //   <Box w="150px" h="100px" bg="red">4</Box>
    // </Flex>
  )
}
