import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, Flex, HStack, Button, Divider, Avatar} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  const tasks = useLoaderData()
 
  return (
    <SimpleGrid  spacing={10} minChildWidth="300px">
      {tasks && tasks.map(task =>(
        // <div key={task.id}>{task.title}</div>
        <Card key={task.id} borderTop="8px" borderColor='blue.400' bg="white">
          <CardHeader>
              <Flex gap='5'>
                <Avatar src={task.img} />
                <Box>
                  <Heading as='h3' size='sm'>{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
              
          </CardHeader>
          <CardBody color="gray.600">
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor='gray.200'/>

          <CardFooter>
           <HStack>
              <Button variant='ghost' leftIcon={<ViewIcon />}>
                  View
              </Button>
              <Button variant='ghost'  leftIcon={<EditIcon />}>
                  Comment
              </Button>
           </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}
export const tasksLoader = async () => {

  const res = await fetch('http://localhost:3000/tasks')

  return res.json()
}