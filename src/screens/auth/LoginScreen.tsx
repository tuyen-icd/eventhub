import { Lock, Sms } from 'iconsax-react-native';
import React, { useState } from 'react';
import ContainerComponent from '../../components/ContainerComponent';
import {ButtonComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent} from '../../components';
import { appColors } from '../../constants';
import { Button, Image, Switch } from 'react-native';
import { Text } from 'react-native-svg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  return (
    <ContainerComponent isImageBackground>
      <SectionComponent styles={{ justifyContent: 'center', alignItems: 'center', marginTop: 75 }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{ width: 162, height: 114, marginBottom: 30 }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent styles={{ fontSize: 24, fontWeight: '700' }} title text='Sign In' />
        <SpaceComponent height={21}/>
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
        <RowComponent justify='space-between'>
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{ false: appColors.gray, true: appColors.primary }}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent styles={{ marginLeft: 8 }} text="Remember me" />
          </RowComponent>
          <ButtonComponent text='Forgot Password' onPress={()=>{}} type='text' color={appColors.primary}/>
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16}/>
      <SectionComponent>
        <ButtonComponent text='Sign In' type='primary' onPress={()=>{}}/>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text='Don’t have an account?' />
        <ButtonComponent type='link' text='Sign Up'/>
      </SectionComponent>
    </ContainerComponent>

    //https://www.youtube.com/watch?v=YKNrm7M-UlM&t=55s     28:53
  );
};

export default LoginScreen;
