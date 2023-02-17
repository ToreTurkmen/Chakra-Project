import { EmailIcon, ChatIcon, StarIcon, CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { TabList, TabPanels, Tabs, Tab, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt='40px' p='20px' colorScheme='blue' variant='enclosed'>
      <TabList>
        <Tab _selected={{color: 'white', bg: 'red.400'}}>Tore</Tab>
        <Tab _selected={{color: 'white', bg: 'red.400'}}>Turkmen</Tab>
      </TabList>

      <TabPanels>
      
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon}/>
              Email: ...@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, explicabo fugiat. Doloremque optio enim sequi voluptate quasi, explicabo minima voluptatem veritatis eum corporis veniam nobis eius asperiores totam dolorum natus?
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam, nostrum saepe facere quos consequuntur non iure atque necessitatibus autem modi quas asperiores sunt. Dolor quos voluptatibus repellat rerum quaerat.
            </ListItem>
          </List>
        </TabPanel>


        <TabPanel>
        <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400'/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam pariatur exercitationem possimus ad consequatur accusantium modi facilis dolorem deleniti similique corporis nesciunt quibusdam placeat vel dicta cum assumenda, numquam quod?
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400'/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, explicabo fugiat. Doloremque optio enim sequi voluptate quasi, explicabo minima voluptatem veritatis eum corporis veniam nobis eius asperiores totam dolorum natus?
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color='red.400'/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam, nostrum saepe facere quos consequuntur non iure atque necessitatibus autem modi quas asperiores sunt. Dolor quos voluptatibus repellat rerum quaerat.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='red.400'/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam, nostrum saepe facere quos consequuntur non iure atque necessitatibus autem modi quas asperiores sunt. Dolor quos voluptatibus repellat rerum quaerat.
            </ListItem>
          </List>
        </TabPanel>

      </TabPanels>
    </Tabs>
  )
}
