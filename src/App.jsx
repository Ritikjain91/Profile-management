
import { Heading, Box,Text,Button } from "@chakra-ui/react";
import "./App.css";
import { useNavigate } from "react-router-dom";




function App() {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate("./customform");
   
  };
  const handleChange = () => {
    navigate("./sign");
   
  };

  return (
    <Box>
     
     <Box textAlign="center" mt="8vh" position="relative">
  <Heading
    fontWeight="bold"
    position="absolute"
    top={["54vh", "55vh"]}
    left={["10%", "29vw"]}
    fontSize={["xl", "2xl"]}
  >
    Welcome to Popx
  </Heading>
  <Box>
    <Text
      position="absolute"
      top={["58vh","58vh", "40vh"]}
      right={["18%","18%", "40vw"]}
      fontSize={["md", "1xl"]}
      p={["2vh","2vh", "22vh"]}
      fontWeight= "normal"
    >
      Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Vero voluptatibus maiores 
    </Text>
  
        <Button bg="blueviolet" position="relative" top={["72.5vh","72.5vh", "73vh"]} width={["85vw", "20vw"]} right={["0", "11.5vw"]} onClick={handleClick}> Create Account</Button>
<Button bg="#bf80ff" position="absolute" top={["78.5vh","78.5vh", "80.3vh"]} width={["85vw", "20vw"]} right={["8%", "51.5vw"]} display={["inline", "inline"]} onClick={handleChange}> Already Register? Login </Button>
      </Box>
    </Box>
    </Box>
  );
}

export default App;
