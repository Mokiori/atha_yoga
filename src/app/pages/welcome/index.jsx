import React, { useEffect, useState } from 'react';
import Logo from '../../components/welcome';
import SplashScreens from '../../components/welcome/splash-screens';
import './style.css';

// const WelcomePage = () => <div className="logo"><Logo /></div>;
const WelcomePage = () => <SplashScreens />;

// const WelcomePage = () => {
//   const [isLogo, setIsLogo] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setIsLogo(false), 7000);
//   }, []);

// eslint-disable-next-line max-len
//   return isLogo ? <div className="logo"><Logo className="logo_image" /></div> : <SplashScreens />;
// };

export default WelcomePage;
