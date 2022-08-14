import Header from "./components/Header";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Typography } from "@mui/material";

export default function Blog() {
    return (
    <>
        <Header/>
        <Box
            display="flex"
            justifyContent="center"
            sx={{ m: 2 }}
        >
            <Typography variant="h3">Blog</Typography>
            
        </Box>
        <Divider light='true' variant="middle" />
        <Typography>Geo</Typography>
    </>
  );
}
