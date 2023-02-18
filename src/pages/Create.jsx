import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter your name</FormHelperText>
        </FormControl>

        <FormControl isRequired mb='40px'>
          <FormLabel>Description:</FormLabel>
          <Textarea placeholder="Enter your desc" name="description" />
        </FormControl>

        <FormControl display='flex' alignItems='center' mb='40px'>
          <Checkbox name="isPriority" size="lg" colorScheme='blue'/>
          <FormLabel mb= '0'ml="10px">Your priority</FormLabel>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({request}) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }
  console.log(task)

  return redirect('/')
}