import AsyncStorage from '@react-native-async-storage/async-storage';
import {Lock, Scroll, Sms} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, Image, ImageBackground, ScrollView, Switch} from 'react-native';
import authenticationAPI from '../../apis/authAPI';
import {backgroundLogin, Logo} from '../../assets/svgs';
import {ButtonComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent} from '../../components';
import ContainerComponent from '../../components/ContainerComponent';
import {appColors} from '../../constants';
import {useAuthStore} from '../../stores/auth.store';
import {Validate} from '../../utils/validate';
import SocialLogin from './components/SocialLogin';
import {Text} from 'react-native-svg';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isDisable, setIsDisable] = useState(true);

  const login = useAuthStore(state => state.login);

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
          '/login',
          {
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30,
          },
          'post',
        );

        //Neu thanh cong thi push res len zustand
        login(res);
        await AsyncStorage.setItem('auth', isRemember ? JSON.stringify(res) : email);
        // console.log('handleLogin', res);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Email not correct!');
    }
  };
  return (
    <>
      <ImageBackground
        source={backgroundLogin}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="cover"
        imageStyle={{flex: 1, width: '100%', height: '100%'}}>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <SpaceComponent height={118} />
          <SectionComponent
            styles={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 75,
            }}>
            <TextComponent color="white" size={30} title text="Login" />
            <TextComponent color="white" size={16} text="Please sign in to your existing account" />
          </SectionComponent>
          <SpaceComponent height={50} />
          <SectionComponent styles={{backgroundColor: 'white', flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '100%'}}>
            <SpaceComponent height={24} />
            <TextComponent text="EMAIL" flex={1} styles={{paddingBottom: 8}} />
            <InputComponent value={email} placeholder="Email" onChange={val => setEmail(val)} allowClear affix={<Sms size={22} color={appColors.gray} />} />
            <TextComponent text="PASSWORD" flex={1} styles={{paddingBottom: 8}} />
            <InputComponent
              value={password}
              placeholder="Password"
              onChange={val => setPassword(val)}
              isPassword
              allowClear
              affix={<Lock size={22} color={appColors.gray} />}
            />
          </SectionComponent>
          {/* <SectionComponent>
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
              <ButtonComponent disable={isDisable} text="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} type="text" />
            </RowComponent>
          </SectionComponent>
          <SpaceComponent height={16} />
          <SectionComponent>
            <ButtonComponent onPress={handleLogin} type="primary" text="SIGN IN" />
          </SectionComponent>
          <SocialLogin />
          <SectionComponent>
            <RowComponent justify="center">
              <TextComponent text="Don’t have an account? " />
              <ButtonComponent type="link" text="Sign up" onPress={() => navigation.navigate('SignUpScreen')} />
            </RowComponent>
          </SectionComponent> */}
        </ScrollView>
      </ImageBackground>
      {/* </ContainerComponent> */}
    </>
  );
};

export default LoginScreen;
