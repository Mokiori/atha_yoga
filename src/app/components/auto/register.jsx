/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import {
  Box, TextField, Typography, Button,
  InputAdornment, IconButton, OutlinedInput,
  Checkbox, FormControlLabel, Link, Grid, Divider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import facebook from '../../../assets/public/Facebook.png';
import google from '../../../assets/public/google.png';
import yandex from '../../../assets/public/Yandex.png';
import vk from '../../../assets/public/VK.png';

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

  const [checked, setChecked] = React.useState(true);

  const eventChange = event => {
    setChecked(event.target.checked);
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
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '137px',
    }}
    >
      <Typography sx={{ fontWeight: 500, fontSize: '24px', mb: '32px' }}>
        Создать аккаунт
      </Typography>
      <Box sx={{
        mx: '16px', mb: '78px', p: '16px', border: '1px solid #E0E0E0', borderRadius: '4px',
      }}
      >
        <TextField
          sx={{ mb: '16px' }}
          fullWidth
          id="email"
          placeholder="E-mail"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <OutlinedInput
          sx={{ mb: '16px' }}
          fullWidth
          id="password"
          placeholder="Пароль"
          name="password"
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
        <Grid container spacing={1} justifyContent="flex-start" alignItems="center" mb="32px">
          <Grid item>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={eventChange} />}
            />
          </Grid>
          <Grid item>
            <Typography fontSize="14px">
              Я принимаю условия
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" underline="none">
              пользовательского
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" underline="none">
              соглашения
            </Link>
          </Grid>
        </Grid>
        <Button
          size="large"
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontSize: '16px', fontWeight: 500,
          }}
        >
          Создать
        </Button>
        <Grid container spacing={1} alignItems="center" justifyContent="center" sx={{ p: '16px', mb: '16px' }}>
          <Grid item>
            <Typography variant="body2">
              Уже есть аккаунт?
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" underline="none">
              Войти
            </Link>
          </Grid>
        </Grid>
        <Divider
          variant="middle"
          flexItem
          sx={{
            mb: '32px', border: 'none', borderTop: '1px solid #E0E0E0',
          }}
        />
        <Typography variant="body2" sx={{ textAlign: 'center', mb: '16px' }}>
          Или войти с помощью
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center" mb="16px">
          <Grid item xs={2}>
            <Link href="#">
              <img src={facebook} alt="facebook-icon" />
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href="#">
              <img src={google} alt="google-icon" />
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href="#">
              <img src={yandex} alt="yandex-icon" />
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href="#">
              <img src={vk} alt="vk-icon" />
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Typography sx={{ fontSize: '12px', fontWeight: 400, mb: '32px ' }}>
        Установите Atha.Yoga как мобильное приложение
        <Typography sx={{ fontSize: '12px', fontWeight: 400 }}>
          на свое устройство. <Link>Подробнее</Link>
        </Typography>
      </Typography>
    </Box>
  );
};
export default Register;
