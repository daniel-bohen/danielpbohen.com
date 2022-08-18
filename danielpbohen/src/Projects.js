import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Header from "./components/Header";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Project from "./components/Project";
import Grid from "@mui/material/Grid";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        sx={{ m: 2 }}
      >
        <Typography variant="h3">Projects</Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
         <Project title="Playlistify: A Spotify Playlist Organizer" text="hello" link="https://github.com/daniel-bohen/playlistify.git"/>
        </Grid>
        <Grid item xs={6}>
          <Project title="Changepoint Detection & Momentum Trading " text="hello"/>
        </Grid>
        <Grid item xs={6}>
          <Project title="CS104: Data Structures & Algorithm Projects" text="hello"/>
        </Grid>
        <Grid item xs={6}>
          <Project title="Pairs Trading Algorithm" text="hello"/>
        </Grid>
        
      </Grid>
    </>
  );
}
