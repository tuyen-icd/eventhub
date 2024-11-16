import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ForgotPassword, LoginScreen, SignUpScreen, VerificationScreen} from '../screens';
import OnbroadingScreen from '../screens/auth/OnBoardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthNavigator = () => {
  const [isExistingUser, setIsExistingUser] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    checkUserExist();
  }, []);
  const checkUserExist = async () => {
    const res = await AsyncStorage.getItem('auth');
    // console.log('res222 :>> ', res);

    res && setIsExistingUser(true);
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isExistingUser && <Stack.Screen name="OnBoarding" component={OnbroadingScreen} />}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
