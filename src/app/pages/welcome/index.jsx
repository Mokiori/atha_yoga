import React, { useEffect, useState } from 'react';
import Logo from '../../components/welcome';
import SplashScreens from '../../components/welcome/splash-screens';
import './style.scss';

const WelcomePage = () => {
  const [isLogo, setIsLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLogo(false), 2000);
  }, []);

  return isLogo ? <div className="logo"><Logo className="logo_image" /></div> : <SplashScreens />;
};

export default WelcomePage;
