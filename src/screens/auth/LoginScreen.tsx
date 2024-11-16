import {yupResolver} from '@hookform/resolvers/yup';
import {Lock, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import {ButtonComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent} from '../../components';
import ContainerComponent from '../../components/ContainerComponent';
import InputRHF from '../../components/hook-form/InputRHF';
import SwitchRHF from '../../components/hook-form/SwitchRHF';
import {appColors} from '../../constants';
import {SCHEMA_LOGIN} from '../../constants/schema';
import {useAuthStore} from '../../stores/auth.store';
import SocialLogin from './components/SocialLogin';

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
    <ContainerComponent isImageBackground>
      <SpaceComponent height={70} />
      <SectionComponent styles={{alignItems: 'center'}}>
        <TextComponent size={30} title text="LOG IN" color={appColors.white} />
        <SpaceComponent height={12} />
        <TextComponent styles={{letterSpacing: 1}} size={16} text="Please sign in to your existing account" color={appColors.white} />
      </SectionComponent>
      <SpaceComponent height={50} />
      <SectionComponent styles={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '100%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SpaceComponent height={24} />
          <FormProvider {...form}>
            <View>
              {/* <TextComponent color={appColors.text} font={fontFamilies.regular} size={13} text="Email" styles={{paddingBottom: 8}} /> */}
              <InputRHF.Text
                name="email"
                {...form}
                inputProps={{
                  placeholder: 'Email',
                  affix: <Sms size={22} color={appColors.gray} />,
                }}
              />
              <SpaceComponent height={16} />
              {/* <TextComponent color={appColors.text} font={fontFamilies.regular} size={13} text="Password" styles={{paddingBottom: 8}} /> */}
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
              <SpaceComponent height={24} />

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
                <ButtonComponent type="link" text="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} />
              </RowComponent>
            </View>
            <SpaceComponent height={37} />
            <View>
              <ButtonComponent onPress={form.handleSubmit(handleLogin)} type="primary" text="SIGN IN" isLoading={isLoading} />
            </View>
            <SpaceComponent height={20} />
            <View>
              <RowComponent justify="center">
                <TextComponent text="Don’t have an account? " />
                <ButtonComponent type="link" text="Sign up" onPress={() => navigation.navigate('SignUpScreen')} />
              </RowComponent>
            </View>
            <SpaceComponent height={27} />
            <SocialLogin />
          </FormProvider>
        </ScrollView>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
