/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import carouselImg1 from './images/carousel_image_1.png';
import carouselImg2 from './images/carousel_image_2.png';
import carouselImg3 from './images/carousel_image_3.png';
import './style.css';

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
  <Carousel>
    {
      slider.map(item => <Item key={item.id} item={item} />)
    }
  </Carousel>
);

const Item = props => (
  <Paper>
    <div className="splash_screens">
      <h2>{props.item.title}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.image} alt={props.item.title} />
    </div>
  </Paper>
);

export default CarouselPage;
