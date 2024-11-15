import {Lock, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Image, ImageBackground} from 'react-native';
import {ButtonComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent} from '../../components';
import ContainerComponent from '../../components/ContainerComponent';
import {appColors} from '../../constants';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import InputRHF from '../../components/hook-form/InputRHF';
import SwitchRHF from '../../components/hook-form/SwitchRHF';
import {yupResolver} from '@hookform/resolvers/yup';
import {SCHEMA_LOGIN} from '../../constants/schema';
import {useAuthStore} from '../../stores/auth.store';
import SocialLogin from './components/SocialLogin';
import {backgroundLogin} from '../../assets/svgs';

const LoginScreen = ({navigation}: any) => {
  const login = useAuthStore(state => state.login);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      isRemember: true,
    },
    resolver: yupResolver(SCHEMA_LOGIN),
  });

  const handleLogin: SubmitHandler<{
    email: string;
    password: string;
    isRemember?: boolean | undefined;
  }> = values => {
    login({...values, navigation}, isLoading => setIsLoading(isLoading));
  };
  return (
    <ImageBackground
      source={backgroundLogin}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      resizeMode="cover"
      imageStyle={{flex: 1, width: '100%', height: '100%'}}>
      <ContainerComponent isImageBackground isScroll>
        <FormProvider {...form}>
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

            <InputRHF.Text
              name="email"
              {...form}
              inputProps={{
                placeholder: 'Email',
                affix: <Sms size={22} color={appColors.gray} />,
              }}
            />

            <SpaceComponent height={10} />
            <InputRHF.Text
              name="password"
              {...form}
              inputProps={{
                placeholder: 'Password',
                isPassword: true,
                allowClear: true,
                affix: <Lock size={22} color={appColors.gray} />,
              }}
            />
            <SpaceComponent height={10} />

            <RowComponent justify="space-between">
              <RowComponent>
                <SwitchRHF
                  name="isRemember"
                  fieldProps={{
                    trackColor: {
                      true: appColors.primary,
                    },
                    thumbColor: appColors.white,
                  }}
                />
                <SpaceComponent width={4} />
                <TextComponent text="Remember me" />
              </RowComponent>
              <ButtonComponent text="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} type="text" />
            </RowComponent>
          </SectionComponent>
          <SpaceComponent height={16} />
          <SectionComponent>
            <ButtonComponent onPress={form.handleSubmit(handleLogin)} type="primary" text="SIGN IN" isLoading={isLoading} />
          </SectionComponent>
          <SocialLogin />
          <SectionComponent>
            <RowComponent justify="center">
              <TextComponent text="Don’t have an account? " />
              <ButtonComponent type="link" text="Sign up" onPress={() => navigation.navigate('SignUpScreen')} />
            </RowComponent>
          </SectionComponent>
        </FormProvider>
      </ContainerComponent>
    </ImageBackground>
  );
};

export default LoginScreen;
