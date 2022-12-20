import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// export default function Project(props) {
//   return (
//     <Card sx={{mt: 2}}>
//       <CardActionArea href={props.link} target="_blank">
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             <u>{props.title}</u>
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {props.text}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }



export default function Project(props) {

  if (props.repo && props.link) {
    return (
      <>
        <Box sx={{ mt: 2, }}>
          <Typography variant="h5" component="div">
            <u>{props.title}</u>
          </Typography>
          <Typography sx={{ mb: -2 }}>Check out the <Button size="small" variant='text' href={props.repo}>Github Repo</Button> and <Button size="small" href={props.link}> Website</Button>! {props.text}</Typography>
          <ul>
            {props.description.map((line) => (
              <li>
                <Typography variant="body1" component="div">
                  {line}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </>
    );
  }
  else if (props.repo) {
    return (
      <>
        <Box sx={{ mt: 2, }}>
          <Typography variant="h5" component="div">
            <u>{props.title}</u>
          </Typography>
          <Typography sx={{ mb: -2 }}>Check out the <Button size="small" href={props.link}>Github Repo</Button>! {props.text}</Typography>
        </Box>
          <ul>
            {props.description.map((line) => (
              <li>
                <Typography variant="body1" component="div">
                  {line}
                </Typography>
              </li>
            ))}
          </ul>
        {/* <Typography>{props.text}</Typography> */}
      </>
    );
  }
  else {
    return (
      <>
        <Box sx={{ mt: 2, mb: -2}}>
          <Typography variant="h5" component="div">
            <u>{props.title}</u>
          </Typography>
        </Box>
          <ul>
            {props.description.map((line) => (
              <li>
                <Typography variant="body1" component="div">
                  {line}
                </Typography>
              </li>
            ))}
          </ul>
      </>
    );
  }
}
