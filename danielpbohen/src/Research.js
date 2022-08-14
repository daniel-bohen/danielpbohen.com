import { Link, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";

export default function Research() {
    return (
        <>
            <Header />
            <Box
                display="flex"
                justifyContent="center"
                sx={{ m: 2 }}
            >
                <Typography variant="h3">Research</Typography>

            </Box>
            <Divider light='true' variant="middle" />
            <Box
                justifyContent="center"
                sx={{ m: 2 }}
            >
                <Typography textAlign="center" variant="h5">Computer Science</Typography>
                
            </Box>
            <Divider light='true' variant="middle" />
            <Box
                justifyContent="center"
                sx={{ m: 2 }}
            >
                <Typography textAlign="center" variant="h5">Medical</Typography>
                
            </Box>
        </>
    );
}
