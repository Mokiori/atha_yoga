import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import WelcomePage from './pages/welcome';
import LogInPage from './pages/auto/login';
import RegisterPage from './pages/auto/register';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="xs">
      <CssBaseline />
      <div className="App">
        <WelcomePage />
        {/* <LogInPage /> */}
        {/* <RegisterPage /> */}
      </div>
    </Container>
  </ThemeProvider>
);

export default App;
