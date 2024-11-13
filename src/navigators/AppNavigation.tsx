import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {SplashScreen} from '../screens';

function AppNavigation() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const {getItem, setItem} = useAsyncStorage('accessToken');

  useEffect(() => {
    checkToken();
    const timeOut = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);


  const checkToken = async () => {
    const token = await getItem();

    token && setAccessToken(token);
  };

  if (isShowSplash) {
    return <SplashScreen />;
  }

  return <NavigationContainer>{accessToken ? <MainNavigator /> : <AuthNavigator />}</NavigationContainer>;
}
export default AppNavigation;
