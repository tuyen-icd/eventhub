import React, {useState} from 'react';
import {Facebook, Google, ICFacebook, ICGoogle} from '../../../assets/svgs';
import {ButtonComponent, SectionComponent, SpaceComponent, TextComponent} from '../../../components';
import {appColors, fontFamilies} from '../../../constants';
import LoadingModal from '../../../modal/LoadingModal';
import {scale} from '../../../utils/scaleDimentions';

const SocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoginWithGoogle = () => {
    console.log('abc');
  };
  const handleLoginWithFacebook = () => {
    console.log('xyz');
  };
  return (
    <SectionComponent>
      <TextComponent styles={{textAlign: 'center'}} text="OR" color={appColors.gray4} size={16} font={fontFamilies.medium} />
      <SpaceComponent height={16} />

      {/* <ButtonComponent
        type="primary"
        onPress={handleLoginWithGoogle}
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Google"
        textFont={fontFamilies.regular}
        iconFlex="left"
        icon={<Google />}
      />

      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Facebook"
        textFont={fontFamilies.regular}
        onPress={handleLoginWithFacebook}
        iconFlex="left"
        icon={<Facebook />}
      /> */}

      <SectionComponent styles={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: scale(30)}}>
        <ICFacebook />
        <ICGoogle />
      </SectionComponent>

      <LoadingModal visible={isLoading} />
    </SectionComponent>
  );
};

export default SocialLogin;
