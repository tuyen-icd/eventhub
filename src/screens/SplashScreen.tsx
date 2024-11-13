import React from 'react';
import {ActivityIndicator, Image, ImageBackground} from 'react-native';
import {SpaceComponent} from '../components';
import {appInfo, appColors} from '../constants';
import {Logo, splash} from '../assets/svgs';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={splash}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{flex: 1}}>
      <Logo
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
        }}
      />
      <SpaceComponent height={16} />
      <ActivityIndicator color={appColors.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;
