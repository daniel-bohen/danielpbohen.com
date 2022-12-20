import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Project from './components/Project'

export default function Projects() {
  return (
        <Box>
        <Divider sx={{mt: 2, mb: 2}}><Typography variant="h3">Projects</Typography></Divider>
          <Project
            sx={{mt: 2, mb: 2}}
            title="Playlistify: A Spotify Playlist Organizer"
            text="hello"
            link="https://github.com/daniel-bohen/playlistify.git" />
          <Project
            title="Changepoint Detection & Momentum Trading "
            text="hello"
            link=""
          />
          <Project
            title="CS104: Data Structures & Algorithm Projects"
            text="hello"
            link="" />
          <Project
            title="Pairs Trading Algorithm"
            text="hello"
            link=""
          />
        </Box>
    );
}
