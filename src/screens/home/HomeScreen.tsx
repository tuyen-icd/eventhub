import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAuthStore} from '../../stores/auth.store';

const HomeScreen = ({navigation}: any) => {
  const logout = useAuthStore(state => state.logout);
  const handleSignOut = async () => {
    logout();
    await AsyncStorage.clear();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button title="LOGOUT" onPress={() => handleSignOut()} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default HomeScreen;
