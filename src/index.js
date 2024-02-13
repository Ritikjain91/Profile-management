import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { Route,Routes,BrowserRouter, } from 'react-router-dom';
import CustomForm from './CustomForm'
import Details from './ShowDetails.jsx';
import Sign from './SignIn.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ='/'  element={<App />}></Route>
      <Route path ='/customform'  element={<CustomForm />}></Route>
      <Route path ='/customform/details' element={<Details/>}></Route>
      <Route path ='/sign' element={<Sign/>}></Route>
      <Route path ='/sign/details' element={<Details/>}></Route>
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </ChakraProvider>

);

