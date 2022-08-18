import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from './Blog';
import Resume from './Resume';
import Projects from './Projects';
import Research from './Research';
import Home from './Home';
import Request from './Request';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Experience from './Experience';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/experience" element={<Experience/>} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/research" element={<Research />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/request" element={<Request />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
