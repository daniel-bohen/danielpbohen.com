import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Project(props) {
  return (
    <Card sx={{mt: 2}}>
      <CardActionArea href={props.link} target="_blank">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <u>{props.title}</u>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
