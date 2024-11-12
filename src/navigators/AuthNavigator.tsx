import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ForgotPassword, LoginScreen, SignUpScreen, VericationScreen} from '../screens';
import OnbroadingScreen from '../screens/auth/OnBoardingScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoarding" component={OnbroadingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="Verication" component={VericationScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
