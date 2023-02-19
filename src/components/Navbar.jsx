import { UnlockIcon } from '@chakra-ui/icons'
import { Flex, Box, Heading, Text, Button, Spacer, HStack, useToast } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />
    })
  }


  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center" >
      <Heading as="h1">Tore Turkmen</Heading>
      
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">T</Box>
        <Text>...@mail.com</Text>
        <Button colorScheme="blue" onClick={showToast}>Logout</Button>
      </HStack>
      
    </Flex>
    
  )
}
