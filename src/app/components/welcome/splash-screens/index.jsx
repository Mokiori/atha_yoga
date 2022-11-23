/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import slider from './slider.json';

const CarouselPage = () => (
  <Carousel>
    {
      slider.map(item => <Item key={item.id} item={item} />)
    }
  </Carousel>
);

const Item = props => (
  <Paper>
    <h2>{props.item.title}</h2>
    <p>{props.item.description}</p>
    <img src={props.item.image} alt={props.item.title} />
  </Paper>
);

export default CarouselPage;
