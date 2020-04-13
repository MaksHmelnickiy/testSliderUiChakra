import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, Box, Heading, Flex  } from "@chakra-ui/core";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";
import { Input , Stack } from "@chakra-ui/core";
import customTheme from "./theme";

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = value => setValue(value);
  return (

    <ThemeProvider theme={customTheme} >
      
      <CSSReset />
            
            <Box ml='100px'  mt='100px'  maxWidth='500px'> 
            
            <Slider   max='1000' step='1'   value={value} onChange={handleChange} > 
              <SliderTrack color="brand.800" background='#CCCCCC'/>
              <SliderFilledTrack  />
              <SliderThumb  background ='#3182CE'> 
                    <Box children={value} value={value} mb='70px' paddingLeft='10px' paddingRight='10px' paddingTop='2px' paddingBottom='2px' borderRadius='5px' background='#fff' boxShadow='2px 10px 38px 0px rgba(0,0,0,0.21)' position='relative'> 
                     
                    </Box>
                    <Box width='10px' height ='10px' background ='#fff' transform='rotate(45deg)' position='absolute' top='-21px' /> 
              </SliderThumb>
            </Slider>
            <Flex>
                <Box color='#CCCCCC' textShadow='0 0'> 0 </Box>  <Box ml='auto' color='#CCCCCC' textShadow='0 0'> 1000км </Box>
            </Flex>
            </Box>
    </ThemeProvider>
      
  );
     
}





const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
