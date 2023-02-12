import { Outlet} from "react-router-dom"
import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      
      <GridItem as="aside" colSpan="1" bg="blue.50" minHeight="100hv" p="30px">
        <span>Sidebar</span>
      </GridItem>
    

      <GridItem as="main" colSpan="5"  p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
      
    </Grid>
  )
}
