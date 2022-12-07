/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  MobileStepper, Box, Button, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import carouselImg1 from './images/carousel_image_1.png';
import carouselImg2 from './images/carousel_image_2.png';
import carouselImg3 from './images/carousel_image_3.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    id: 1,
    title: 'Исследуйте',
    description: 'множество занятий и материалов \nпо различным темам и направлениям',
    imgPath: carouselImg1,
  },
  {
    id: 2,
    title: 'Занимайтесь',
    description: 'в подходящее время, в удобном месте, \nс лучшими преподавателями',
    imgPath: carouselImg2,
  },
  {
    id: 3,
    title: 'Создавайте',
    description: 'собственные курсы и занятия',
    imgPath: carouselImg3,
  },
];

const CarouselPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        mt: '120px',
        mb: '48px',
      }}
    >
      <Typography
        sx={{
          mb: '16px',
        }}
        variant="h4"
        component="h1"
      >{images[activeStep].title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          whiteSpace: 'pre-line', mb: '64px', minHeight: '44px',
        }}
      >{images[activeStep].description}
      </Typography>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  textAlign: 'center',
                }}
                src={step.imgPath}
                alt={step.title}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{ textAlign: 'center', mb: '71px' }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
      <Button
        component={Link}
        to="/register"
        sx={{
          minWidth: 311, mb: '16px', borderRadius: '6px', fontSize: '16px', lineHeight: '26px',
        }}
        variant="contained"
        size="large"
      >
        Присоединиться
      </Button>
      <Box sx={{ m: '0 auto' }}>
        <Typography sx={{ display: 'inline-block', mr: '8px' }} variant="subtitle2">
          Уже есть аккаунт?
        </Typography>
        <Typography component={Link} to="/login" variant="body2" color="primary" sx={{ textDecoration: 'none' }}>
          Войти
        </Typography>
      </Box>
    </Box>
  );
};

export default CarouselPage;
