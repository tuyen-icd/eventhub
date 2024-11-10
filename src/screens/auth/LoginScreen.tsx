import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import InputComponent from '../../components/InputComponent';
import {appColors} from '../../constants/appColors';
import {Lock, Sms} from 'iconsax-react-native';
import ContainerComponent from '../../components/ContainerComponent';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ContainerComponent isImageBackground>
      <InputComponent
        value={email}
        placeholder="Email"
        onChange={val => setEmail(val)}
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
      />
      <InputComponent
        value={password}
        placeholder="Password"
        onChange={val => setPassword(val)}
        isPassword
        allowClear
        affix={<Lock size={22} color={appColors.gray} />}
      />
    </ContainerComponent>
  );
};

export default LoginScreen;
