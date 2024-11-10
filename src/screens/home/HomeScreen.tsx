import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles/globalStyles';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button title="LOGOUT" onPress={async () => await AsyncStorage.clear()} />
    </View>
  );
};

export default HomeScreen;
