import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, PersonalInfo, ProfileScreen} from '../screens';
import EditProfile from '../screens/profile/EditProfile';

const TabNavigator = () => {
  const Tab = createNativeStackNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="PersonalInfo" component={PersonalInfo} />
      <Tab.Screen name="EditProfile" component={EditProfile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
