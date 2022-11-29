/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import {
  Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box,
  Typography, InputAdornment, IconButton, OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LogIn = () => {
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

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '137px',
      }}
    >
      <Typography variant="h4" fontSize="24px" fontWeight="500" gutterBottom sx={{ mb: '32px' }}>
        Войти в аккаунт
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          border: '1px solid #E0E0E0', borderRadius: '4px', p: '16px',
        }}
      >
        <TextField
          fullWidth
          id="email"
          placeholder="E-mail"
          name="email"
          autoComplete="email"
          autoFocus
          sx={{ mb: '16px' }}
        />
        <OutlinedInput
          fullWidth
          name="password"
          placeholder="Пароль"
          id="password"
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
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
            />
            <Typography display="inline" fontSize="14px">
              Запомнить меня
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" underline="none">
              Забыли пароль?
            </Link>
          </Grid>
        </Grid>
        <Button
          type="submit"
          size="large"
          fullWidth
          variant="contained"
          sx={{ fontSize: '16px', fontWeight: 500 }}
        >
          Войти
        </Button>
        <Grid container alignItems="center" justifyContent="space-around" sx={{ p: '16px' }}>
          <Grid item>
            <Typography variant="body2">
              Ещё нет аккаунта?
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" underline="none">
              Зарегистрироваться
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LogIn;
