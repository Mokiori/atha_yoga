import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome';
import LogInPage from './pages/auto/login';
import RegisterPage from './pages/auto/register';
import Confirm from './components/auto/register-confirm';
import ChangePassword from './components/auto/change-password';
import Profile from './pages/profile/profile';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D6EFD',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
    },
  },
  typography: {
    fontSize: 16,
    fontWeight: 400,
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#212121',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#212121',
    },
    body1: {
      fontSize: '1rem',
      color: '#616161',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#616161',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="xs">
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="*" element={<WelcomePage />} /> */}
        </Routes>
      </div>
    </Container>
  </ThemeProvider>
);

export default App;
