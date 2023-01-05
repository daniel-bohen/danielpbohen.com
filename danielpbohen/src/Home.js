import Header from "./components/Header";
import Box from '@mui/material/Box';
import { Divider, Typography } from "@mui/material";
import me from "./components/me.jpg";
import Projects from "./Projects";
import Experience from "./Experience";
import Publications from "./Publications";


export default function Home() {
  return (
    <>
      <Header />
      <Box
        display="flex"
      >
     
        <Box
          sx= {{ 
          width: '100%',
          ml: 2,
          mt: 2, 
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            height: 'auto',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',

          }}}
          display="flex"
        >
           <img src={me} alt="me" width="300em" height="auto" />
          <Typography sx={{mb: 2, ml: 2, mr: 2}}variant="h2">Daniel Bohen <Typography>
            Hello! My name is Daniel Bohen, and I am a computer science student broadly interested in intelligent cyber physical systems. Additionally, 
            I have a strong interest in the intersection of computer science and medicine, and enjoy using machine learning and automation to assist with 
            medical research projects and clinical tasks. I am currently working at the USC Information Sciences Institute for Dr. Luis Garcia on NeuroIoT. 
            Our project is focusing on the development of robust, explainable decision making systems for deep brain stimulation. I plan to pursue a PhD in
            Computer Science with a focus on modeling and control of complex dynamic systems. 
            
          </Typography></Typography>
        </Box>
      </Box>
      <Box
        sx={{ m: 2 }}
        alignItems={"center"}
        column
      >
      <Experience /> 
      <Projects />
      {/* <Publications /> */}
      </Box>
    </>
  );
}
