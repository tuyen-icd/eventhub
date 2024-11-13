import {ArrowCircleRight2, Lock, Sms} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, Image, Switch} from 'react-native';
import {ButtonComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent} from '../../components';
import ContainerComponent from '../../components/ContainerComponent';
import {appColors} from '../../constants';
import SocialLogin from './components/SocialLogin';
import authenticationAPI from '../../apis/authAPI';
import { Validate } from '../../utils/validate';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    const emailValidation = Validate.email(email);

    if (!email || !password || !emailValidation) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [email, password]);

  const handleLogin = async () => {
    const emailValidator = Validate.email(email);
    if (emailValidator) {
      try {
        const res = await authenticationAPI.HandleAuthentication(
          '/auth/login',
          {
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30,
          },
          'post',
          'include',
        );

        //Neu thanh cong thi push res len zustand
        //...
        await AsyncStorage.setItem(
          'auth',
          isRemember ? JSON.stringify(res.data) : email,
        )
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Email not correct!');
    }

  };
  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{
            width: 162,
            height: 114,
            marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} title text="Sign in" />
        <SpaceComponent height={21} />
        <InputComponent value={email} placeholder="Email" onChange={val => setEmail(val)} allowClear affix={<Sms size={22} color={appColors.gray} />} />
        <InputComponent
          value={password}
          placeholder="Password"
          onChange={val => setPassword(val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />

        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{
                true: appColors.primary,
              }}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <SpaceComponent width={4} />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent text="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} type="text" />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent disable={isDisable} onPress={handleLogin} type="primary" text="SIGN IN" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent type="link" text="Sign up" onPress={() => navigation.navigate('SignUpScreen')} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
