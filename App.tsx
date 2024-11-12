import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import {StatusBar} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AppNavigation from './src/navigators/AppNavigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <AppNavigation />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
