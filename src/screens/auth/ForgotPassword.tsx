import {ArrowCircleRight2, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent} from '../../components';
import {appColors} from '../../constants';
import BackHeader from '../../components/Header/BackHeader';
import {ScrollView, View} from 'react-native';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <ContainerComponent back isImageBackground>
      <SectionComponent>
        <SpaceComponent height={23} />
        <SectionComponent styles={{alignItems: 'center'}}>
          <TextComponent text="Forgot Password" title color={appColors.white} />
          <SpaceComponent height={12} />
          <TextComponent text="Please sign in to your existing account" color={appColors.white} />
        </SectionComponent>
        <SpaceComponent height={26} />
      </SectionComponent>
      <SpaceComponent height={49} />
      <SectionComponent styles={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '100%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SpaceComponent height={24} />
          <TextComponent font="regular" text="EMAIL" styles={{paddingBottom: 8}} />
          <InputComponent placeholder="example@gmail.com" value={email} onChange={setEmail} affix={<Sms size={22} color={appColors.gray} />} />
          <View>
            <ButtonComponent text="SEND CODE" type="primary" icon={<ArrowCircleRight2 size={26} color={appColors.white} />} iconFlex="right" />
          </View>
        </ScrollView>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotPassword;
