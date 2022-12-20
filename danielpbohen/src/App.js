import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from './Resume';
import CV from './Resume';
import Home from './Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


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
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/cv" element={<CV />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
