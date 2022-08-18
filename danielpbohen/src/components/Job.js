import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Project(props) {
  return (
    <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}{ }{props.dates}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.employer}
          </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
    </Card>
  );
}