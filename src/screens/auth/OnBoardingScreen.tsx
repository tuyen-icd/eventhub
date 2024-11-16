import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {onboard_1, onboard_2, onboard_3} from '../../assets/svgs';
import {ButtonComponent, SectionComponent} from '../../components';
import {appColors} from '../../constants';
import {globalStyles} from '../../styles/globalStyles';
import OnBoard from './components/OnBoard';

const OnbroadingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  return (
    <SectionComponent styles={[globalStyles.container]}>
      <Swiper loop={false} onIndexChanged={num => setIndex(num)} index={index} activeDotColor={appColors.primary}>
        <OnBoard
          img={onboard_1}
          title="All your favorites"
          desc="Get all your loved foods in one once place,
you just place the orer we do the rest"
        />
        <OnBoard
          img={onboard_2}
          title="Order from choosen chef"
          desc="Get all your loved foods in one once place,
you just place the orer we do the rest"
        />
        <OnBoard
          img={onboard_3}
          title="Free delivery offers"
          desc="Get all your loved foods in one once place,
you just place the orer we do the rest"
        />
      </Swiper>

      <SectionComponent>
        <ButtonComponent onPress={() => (index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen'))} type="primary" text="NEXT" />
        <ButtonComponent onPress={() => navigation.navigate('LoginScreen')} type="primary" text="SKIP" />
      </SectionComponent>
    </SectionComponent>
  );
};

export default OnbroadingScreen;

const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
