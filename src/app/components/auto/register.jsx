/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import {
  Box, TextField, Typography, Button, InputLabel, FormControl,
  InputAdornment, IconButton, OutlinedInput, Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Footer from './footer';

const Register = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '137px',
      }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: '24px', mb: '32px' }}>
          Регистрация
        </Typography>
        <Box sx={{
          mb: '201px', p: '16px', border: '1px solid #E0E0E0', borderRadius: '4px',
        }}
        >
          <TextField
            sx={{ mb: '16px' }}
            fullWidth
            id="email"
            label="Электронная почта"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <FormControl fullWidth>
            <InputLabel>Пароль</InputLabel>
            <OutlinedInput
              sx={{ mb: '32px' }}
              fullWidth
              id="password"
              label="Пароль"
              name="Пароль"
              autoComplete="current-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )}
            />
          </FormControl>
          <Button
            size="large"
            fullWidth
            variant="contained"
            sx={{
              fontSize: '16px', fontWeight: 500,
            }}
          >
            Зарегистрироваться
          </Button>
          <Grid container spacing={1} alignItems="center" justifyContent="center" sx={{ p: '16px' }}>
            <Grid item>
              <Typography variant="body2">
                Уже есть аккаунт?
              </Typography>
            </Grid>
            <Grid item>
              <Typography component={Link} to="/login" variant="body2">
                Войти
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
export default Register;
