import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import React from 'react';

const ChangePassword = () => (
  <>
    <Typography fontSize="24px" fontWeight="600" mb="32px" mt="137px">
      Восстановление пароля
    </Typography>
    <Typography fontSize="16px" fontWeight="400" mb="16px">
      Мы отправим вам письмо со ссылкой для восстановления пароля
    </Typography>
    <Box sx={{ p: '16px', border: '1px solid #E0E0E0', borderRadius: '4px' }}>
      <TextField
        sx={{ mb: '32px' }}
        fullWidth
        id="email"
        label="Электронная почта"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <Button
        size="large"
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          fontSize: '16px', fontWeight: 500, mb: '32px',
        }}
      >
        Отправить
      </Button>
    </Box>
  </>
);

export default ChangePassword;
