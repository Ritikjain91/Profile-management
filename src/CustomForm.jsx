import React, { useState, createContext, useContext } from 'react';
import { Box, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './App.css'

const MyContext = createContext(); 

const CustomForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
const [password,setPassword]=useState('');
  const HandleButton = (event) => {
    event.preventDefault(); 
   
    if (!email || !name|| !password) {
      alert('plzz fill out the form')
      
      return; 
    }
   
    navigate('./details', { state: { email, name } });
  };



  return (
    <MyContext.Provider value={{ email, setEmail, name, setName }}>
      <Box padding={['9vh', '2vh']} bg="#e6e6e6" width={['100vw','80vw', '20vw']} height={['200vh','280vh', '100vh']} position="absolute" right={['1vw','34', '33vw']} mt={[0,0,"2vh"]}>
        <Text fontSize="1.5rem" fontWeight="bolder">
          Create Your <br />popX account
        </Text>
        <FormControl width={['50vw','50vw', '15vw']} border="black">
          <FormLabel color="blue">
            Full Name{' '}
            <Box as="span" color="red.500">
              *
            </Box>
          </FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} isRequired />
        </FormControl>
        <FormControl width={['50vw','50vw', '15vw']} border="black">
          <FormLabel color="blue">
            Phone Number{' '}
            <Box as="span" color="red.500">
              *
            </Box>
          </FormLabel>
          <Input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
        </FormControl>
        <FormControl width={['50vw','50vw', '15vw']} border="black">
          <FormLabel color="blue">
            E-mail Address{' '}
            <Box as="span" color="red.500">
              *
            </Box>
          </FormLabel>
          <Input type="email" isRequired value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl  width={['50vw','50vw', '15vw']} border="black">
          <FormLabel color="blue">
            Password{' '}
            <Box as="span" color="red.500">
              *
            </Box>
          </FormLabel>
          <Input type="password" isRequired value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <FormControl  width={['50vw','50vw', '15vw']} border="black">
          <FormLabel color="blue">
            Company Name{' '}
            <Box as="span" color="red.500">
              *
            </Box>
          </FormLabel>
          <Input type="text" isRequired required/>
        </FormControl>

        <form>
          <fieldset>
            <legend>
              <Box mt="1vh">
                Are you an Agency?{' '}
                <Box as="span" color="red.500">
                  *
                </Box>
              </Box>
            </legend>
            <div>
              <input type="radio" id="contactChoice1" name="contact" value="yes" />
              <label htmlFor="contactChoice1">Yes</label>

              <input type="radio" id="contactChoice2" name="contact" value="no" />
              <label htmlFor="contactChoice2">No</label>
            </div>
            <div>
              <Button
                bg="blueviolet"
                type="submit"
                onClick={HandleButton}
                position="relative"
                top={['25vh','25vh', '2vh']}
                width={['55vw','55vw', '15vw']}
                right={['0', '0']}
              >
                Create Account
              </Button>
            </div>
          </fieldset>
        </form>
      </Box>
    </MyContext.Provider>
  );
};

export default CustomForm;

export const useFormContext = () => useContext(MyContext);
