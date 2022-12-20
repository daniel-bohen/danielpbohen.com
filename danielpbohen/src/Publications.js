import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Publication from './components/Publication';

export default function Publications() {
  return (
        <Box>
        <Divider sx={{mt: 2, mb: 2}}><Typography variant="h3">Publications</Typography></Divider>
          <Divider sx={{mt: 2, mb: 2}}><Typography variant="h5">Published</Typography></Divider>
          <Typography align='center'><i>/* Coming Soon! */</i></Typography>
          <Divider sx={{mt: 2, mb: 2}}><Typography variant="h5">Under Review</Typography></Divider>
          <Publication
            sx={{mt: 2, mb: 2}}
            title="Playlistify: A Spotify Playlist Organizer"
            front="Jacob Bohn, "
            me="Daniel Bohen"
            back=" Dr. Wayne cheng"
            venue="CS 104: Data Structures & Algorithms"
            text=""
            link="" />
          <Publication
            title="Changepoint Detection & Momentum Trading "
            text="hello"
            link=""
          />
          <Publication
            title="CS104: Data Structures & Algorithm Projects"
            text="hello"
            link="" />
          <Publication
            title="Pairs Trading Algorithm"
            text="hello"
            link=""
          />
        </Box>
    );
}
