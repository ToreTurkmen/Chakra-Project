import { Container, Heading, Text, Box} from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyle = {
    p: "10px",
    bg: "blue",
    m:"10px",
    color: "white",
    textAlign: "center",
    filter: "blur(2px)",
    ':hover': {
      color: 'black',
      bg: 'blue.200'
    }
  }
  return (
    <Container as="section" py="20px" maxW="4xl">
      <Heading my="30px" p="10px">Tore Turkmen</Heading>
      <Text marginLeft="30px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ad nisi accusamus optio qui? Aliquid quam temporibus quo, optio assumenda nihil, repellat vero facere blanditiis, nam nemo ea odit voluptas!</Text>
      <Text ml="30px" color="blue" fontWeight="bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ad nisi accusamus optio qui? Aliquid quam temporibus quo, optio assumenda nihil, repellat vero facere blanditiis, nam nemo ea odit voluptas!</Text>

      <Box my="30px" p="20px" bg="red">
          <Text color="white">This is a box</Text>
      </Box>
      <Box sx={boxStyle}>
        Helo Tore
      </Box>
    </Container>
  )
}
