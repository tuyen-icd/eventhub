import React, {useEffect, useState} from 'react';
import {LoginScreen, SplashScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
