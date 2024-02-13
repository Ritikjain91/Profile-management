import React from 'react'
import { Text,Button ,Box,Image} from '@chakra-ui/react'
import { useLocation } from "react-router-dom";


const ShowDetails = () => {
    const location = useLocation();
    const { email, name } = location.state || {}; // Extract email and name from location state
  
    return (
      <Box>
        <nav bg="#ffffff">
          <Button p="1em" my="1em" position="relative" right="0em">
            Account Settings
          </Button>
        </nav>
        <Box bg="#e6e6e6" p={["9vh","10vh","10em"]} position="relative"   >
        <Image borderRadius=" 100px " h={20} position="relative" right="5em" top={["0vh","0vh","0vh"]} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2k_mRTtn4ZCuaCWY1crj3V_Of6VE3VmsOA&usqp=CAU" alt="image of a agitl" />

<Box bottom={["10vh","10vh","5em"]} position="relative">
          <Text>User Details</Text>
          <Text>Email: {email}</Text>
          <Text>Name: {name}</Text>
          <Text fontWeight="bolder">About us</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla fuga, eligendi deserunt, eum sequi, nisi nam eius repudiandae animi velit pariatur dolor atque quos! Tenetur consequatur nesciunt optio id?

          </Text>
          </Box>
        </Box>
      </Box>
    );
  };
  


export default ShowDetails