import { Link, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import me from "./components/me.jpg";
import Project from "./components/Project";
import Job from "./components/Job";
import Divider from '@mui/material/Divider';
import Projects from "./Projects";
import Experience from "./Experience";

export default function Home() {
  return (
    <>
      <Header />
      <Box
        display="flex"
        sx={{ m: 2 }}
      >

        <img src={me} alt="me" width="300" height="auto" />
        <Box
          sx={{ m: 2 }}
        >
          <Typography variant="h2">Daniel Bohen</Typography>
          <Typography>
            Hello! My name is Daniel Bohen, and I am a computer science student interested in intelligent cyber physical systems.
            My research interests are in machine learning, 
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ m: 2 }}
        alignItems={"center"}
        column
      >
      <Experience /> 
      <Projects />
      </Box>
    </>
  );
}
