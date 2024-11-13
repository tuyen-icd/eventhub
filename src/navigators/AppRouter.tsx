import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {SplashScreen} from '../screens';
import {useStore} from 'zustand';
import {useAuthStore} from '../stores/auth.store';

function AppRouter() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const {getItem, setItem} = useAsyncStorage('auth');

  const auth = useAuthStore(state => state.auth);

  console.log('auth :>> ', auth);
  useEffect(() => {
    checkToken();
    const timeOut = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  const checkToken = async () => {
    const token: any = await getItem();
    console.log('checkToken :>> ', token);
    token && auth(JSON.parse(token));
  };

  if (isShowSplash) {
    return <SplashScreen />;
  }

  return <NavigationContainer>{auth?.accessToken ? <MainNavigator /> : <AuthNavigator />}</NavigationContainer>;
}
export default AppRouter;
