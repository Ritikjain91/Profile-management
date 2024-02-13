import { Box, FormControl, FormLabel, Input,Text,Button } from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const ShowDetails = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const user = new useNavigate()
    const Handlethat=(event)=>{
      event.preventDefault();
      if (!email ||  !password) {
        alert('plzz fill out the form')
      
        return; 
      }
user('./details',{ state: { email } })
    }
  return (
    <Box padding={['5em','5em', '5em 20em']} bg="#e6e6e6" width={['75vh','100vh','164vh']}position='absolute' right={["0vh","5vh",'20vh']} display="inline-block" mt={['1em']} height={["100vh","120vh","95vh"]}>
      <Text fontSize='1.5rem' fontWeight='bolder'>Create Your <br/>popX account</Text>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit .</Text>
    
      <FormControl width={['40vh','60vh','50vh']} border="black">
        <FormLabel color='blue'>
          E-mail Address{' '}
          <Box as="span" color="red.500">
            *
          </Box>
          

        </FormLabel>
        <Input type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
      
      </FormControl>
      <FormControl width={['40vh','60vh','50vh']} border="black">
        <FormLabel color='blue'>
          Password{' '}
          <Box as="span" color="red.500">
            *
          </Box>
        </FormLabel>
        <Input type='password' isRequired value={password} onChange={(e) => setPassword(e.target.value)} />

      </FormControl>
      <Button bg="blueviolet" type='submit' onClick={Handlethat} position="relative"    top={["25em", "25vh"]}  width={["15em", "15em"]}   right={["0", "0em"]} > Create Account</Button>
   
    </Box>
  );
};

export default ShowDetails;
