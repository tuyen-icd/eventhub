import {View, Text} from 'react-native';
import React, { useState } from 'react';
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components';
import { Lock, Sms, User } from 'iconsax-react-native';
import { appColors } from '../../constants';

const initValue = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpScreen = ({ navigation }: any) => {
  const [values, setValues] = useState(initValue);
  const [isDisable, setIsDisable] = useState(true);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values };
    data[`${key}`] = value;
    setValues(data);
  }

  const handleLogin = () => {

  }

  return (
    <ContainerComponent isImageBackground isScroll back>
      <SectionComponent>
        <TextComponent size={24} title text="Sign up" />
        <SpaceComponent height={21} />
        <InputComponent
          value={values.userName}
          placeholder="User name"
          onChange={val => handleChangeValue('userName', val)}
          allowClear
          affix={<User size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.email}
          placeholder="Email"
          onChange={val => handleChangeValue('email', val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.password}
          placeholder="Password"
          onChange={val => handleChangeValue('password', val)}
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
          isPassword
        />
        <InputComponent
          value={values.confirmPassword}
          placeholder="Confirm password"
          onChange={val => handleChangeValue('confirmPassword', val)}
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
          isPassword
        />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
          <ButtonComponent
            disable={isDisable}
            onPress={handleLogin}
            type="primary"
            text="SIGN UP"
          />
      </SectionComponent>
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Alredy have an account? " />
          <ButtonComponent
            type="link"
            text="Signin"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
