import {ArrowCircleRight2, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {appColors} from '../../constants';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <ContainerComponent back isImageBackground>
      <SectionComponent>
        <TextComponent text="Reset Password" title />
        <SpaceComponent height={12} />
        <TextComponent text="Please enter your email address to reset your password" />
        <SpaceComponent height={26} />
        <InputComponent
          placeholder="example@gmail.com"
          value={email}
          onChange={setEmail}
          affix={<Sms size={22} color={appColors.gray} />}
        />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text="SEND"
          type="primary"
          icon={<ArrowCircleRight2 size={22} color={appColors.white} />}
          iconFlex="right"
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotPassword;
