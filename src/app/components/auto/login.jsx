/* eslint-disable react/jsx-closing-tag-location */
import * as React from 'react';
import {
  Button, TextField, Grid, Box,
  Typography, InputAdornment, IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LogIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };

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
        Вход
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          border: '1px solid #E0E0E0', borderRadius: '4px', p: '16px',
        }}
      >
        <TextField
          fullWidth
          id="email"
          placeholder="Электронная почта"
          name="email"
          autoComplete="email"
          autoFocus
          sx={{ mb: '16px' }}
          {...register('email', {
            required: 'Поле не может быть пустым',
          })}
          error={errors?.email}
          helperText={errors?.email ? errors?.email?.message : ''}
        />
        <TextField
          fullWidth
          name="password"
          placeholder="Пароль"
          id="password"
          autoComplete="current-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>,
          }}
          {...register('password', {
            required: 'Поле не может быть пустым',
          })}
          error={errors?.password}
          helperText={errors?.password ? errors?.password?.message : ''}
          sx={{ mb: '16px' }}
        />
        <Box textAlign="right" sx={{ mb: '32px' }}>
          <Typography
            component={Link}
            to="/changePassword"
            variant="body2"
            sx={{ textDecoration: 'none' }}
          >
            Забыли пароль?
          </Typography>
        </Box>
        <Button
          type="submit"
          size="large"
          fullWidth
          variant="contained"
          sx={{ fontSize: '16px', fontWeight: 500, p: '11px' }}
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
            <Typography component={Link} to="/register" variant="body2" color="primary" sx={{ textDecoration: 'none' }}>
              Зарегистрироваться
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LogIn;
