/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Container, Button, Box, Typography,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import carouselImg1 from './images/carousel_image_1.png';
import carouselImg2 from './images/carousel_image_2.png';
import carouselImg3 from './images/carousel_image_3.png';
import './style.scss';

const theme = createTheme();
const slider = [
  {
    id: 1,
    title: 'Исследуйте',
    description: 'множество занятий и материалов по различным темам и направлениям',
    image: carouselImg1,
  },
  {
    id: 2,
    title: 'Занимайтесь',
    description: 'в подходящее время, в удобном месте, с лучшими преподавателями',
    image: carouselImg2,
  },
  {
    id: 3,
    title: 'Создавайте',
    description: 'собственные курсы и занятия',
    image: carouselImg3,
  },
];

const CarouselPage = () => (
  <Container sx={{ height: 812 }}>
    <Carousel
      sx={{ mb: '20px' }}
      indicatorContainerProps={{
        style: {
          marginTop: '147px',
        },
      }}
    >
      {slider.map(item => <Item key={item.id} item={item} />)}
    </Carousel>
    <Button
      sx={{ width: 311, mb: '16px' }}
      variant="contained"
      size="large"
    >
      Присоединиться
    </Button>
    <Box>
      <Typography sx={{ display: 'inline-block', m: '0 auto', mr: '8px' }} variant="body2">
        Уже есть аккаунт?
      </Typography>
      <Button size="small">
        Войти
      </Button>
    </Box>
  </Container>
);

const Item = props => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}
      >
        <Typography variant="h2" class="header">
          <h2>{props.item.title}</h2>
        </Typography>
        <Typography sx={{ mb: '64px' }}>
          <p>{props.item.description}</p>
        </Typography>
        <img src={props.item.image} alt={props.item.title} />
      </Box>
    </Container>
  </ThemeProvider>
);

export default CarouselPage;
