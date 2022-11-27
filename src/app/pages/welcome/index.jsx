import React, { useEffect, useState } from 'react';
import Logo from '../../components/welcome';
import SplashScreens from '../../components/welcome/splash-screens';
import './style.scss';
// eslint-disable-next-line import/order
import { Button } from '@mui/material';

// const WelcomePage = () => <div className="logo"><Logo /></div>;
// const WelcomePageCarousel = () => (
const WelcomePage = () => (
  <SplashScreens />
);

// const WelcomePage = () => {
//   const [isLogo, setIsLogo] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setIsLogo(false), 2000);
//   }, []);

//   return isLogo ? <div className="logo"><Logo className="logo_image" /></div> : <WelcomePageCarousel />;
// };

export default WelcomePage;
