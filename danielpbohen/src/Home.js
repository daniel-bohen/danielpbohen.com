import { Link, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";


export default function Home() {
    return (
    <>
    <Header/>
    <Typography>Hello</Typography>
    </>
  );
}