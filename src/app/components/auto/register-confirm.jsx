/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Typography, Link } from '@mui/material';
import React from 'react';
import email from '../../../assets/public/email.png';

const Confirm = () => (
  <Box mt="216px" textAlign="center">
    <img src={email} alt="email-confirm" />
    <Typography fontSize="16px" fontWeight="500" mt="32px" mb="16px" mx="58px">
      Письмо с подтверждением регистрации отправлено вам на почту
    </Typography>
    <Typography fontSize="14px" fontWeight="400" mx="16px">
      Следуйте инструкции из письма.
      Если письмо не пришло, <Link underline="none">отправить письмо еще раз.</Link>
    </Typography>
  </Box>
);

export default Confirm;
