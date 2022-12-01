/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography, Link } from '@mui/material';
import React from 'react';

const Footer = () => (
  <Typography sx={{ fontSize: '12px', fontWeight: 400, mb: '16px ' }}>
    Нажимая на кнопку «Зарегистрироваться», я подтверждаю,
    что ознакомлен(а) с <Link>пользовательским соглашением</Link>
  </Typography>
);

export default Footer;
