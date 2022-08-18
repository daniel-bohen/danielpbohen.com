import { Link, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";


export default function Home() {
  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        sx={{ m: 2 }}
      >
        <Typography variant="h3">Daniel Bohen</Typography>
      </Box>
      <Typography>Hello! I am a sophomore engineering student </Typography>
    </>
  );
}
