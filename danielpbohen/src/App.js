import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
