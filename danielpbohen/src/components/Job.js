import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Job(props) {
  return (
    <>
      <Box sx={{mt: 2, mb: 1}}>
        <Typography variant="h5" component="div">
          <u>{props.title}</u>
        </Typography>
        <Grid container justifyContent="space-between" direction="row">
          <Grid item>
            <i>{props.employer}</i>
          </Grid>
          <Grid item>
            <i>{props.dates}</i>
          </Grid>
        </Grid>
      </Box>
      {/* map items from props.description to each line */}
      {props.description.map((line) => (
        <Typography variant="body1" component="div">
          {line}
        </Typography>
      ))}
    </>
  );
}