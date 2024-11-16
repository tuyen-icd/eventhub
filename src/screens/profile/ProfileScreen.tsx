import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  ICAddress,
  ICBackWhite,
  ICCart,
  ICCartProfile,
  ICChevronRight,
  ICFAQs,
  ICFavouriteProfile,
  ICLogOut,
  ICMore,
  ICNotificationProfile,
  ICPersonalInfo,
  ICSettings,
} from '../../assets/svgs';
import BackHeader from '../../components/Header/BackHeader';
import {SectionComponent, SpaceComponent, TextComponent} from '../../components';
import {useAuthStore} from '../../stores/auth.store';
import {Image} from 'react-native';
import {appColors} from '../../constants';
import {ArrowRotateLeft, RotateRight} from 'iconsax-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}: any) => {
  const auth = useAuthStore(state => state.auth);
  const logout = useAuthStore(state => state.logout);

  return (
    <SectionComponent styles={{flex: 1, backgroundColor: 'white'}}>
      <SpaceComponent height={70} />
      <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
        <BackHeader btn="gray" title={'Profile'} />

        <TouchableOpacity onPress={() => {}}>
          <ICMore />
        </TouchableOpacity>
      </View>
      <SpaceComponent height={24} />
      {/* AVATAR */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 32,
          }}>
          <Image source={{uri: auth?.image}} style={{width: 100, height: 100, borderRadius: 50}} />
          <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
            <TextComponent
              font="Poppins-Bold"
              text={auth?.firstName + ' ' + auth?.lastName}
              styles={{
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
                color: appColors.text,
                textAlign: 'center',
              }}
            />
            <SpaceComponent height={8} />
            <TextComponent font="Poppins-Bold" text="I love fast food" color={appColors.placeholderColor} />
          </View>
        </View>
      </View>
      <SpaceComponent height={32} />
      {/* Component Tab 1*/}
      <View style={styles.boxBackground}>
        <SpaceComponent height={20} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonalInfo');
          }}>
          <SectionComponent styles={styles.flexCenterContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ICPersonalInfo />
              <SpaceComponent width={8} />
              <TextComponent font="Poppins-Bold" text="Personal Info" />
            </View>
            <ICChevronRight />
          </SectionComponent>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <SectionComponent styles={styles.flexCenterContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ICAddress />
              <SpaceComponent width={8} />
              <TextComponent font="Poppins-Bold" text="Address" />
            </View>
            <ICChevronRight />
          </SectionComponent>
        </TouchableOpacity>
      </View>
      <SpaceComponent height={20} />
      {/* Component Tab 2 */}
      <View style={styles.boxBackground}>
        <SpaceComponent height={20} />
        <TouchableOpacity onPress={() => {}}>
          <SectionComponent styles={styles.flexCenterContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ICCartProfile />
              <SpaceComponent width={8} />
              <TextComponent font="Poppins-Bold" text="Cart" />
            </View>
            <ICChevronRight />
          </SectionComponent>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <SectionComponent styles={styles.flexCenterContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ICFavouriteProfile />
              <SpaceComponent width={8} />
              <TextComponent font="Poppins-Bold" text="Favourite" />
            </View>
            <ICChevronRight />
          </SectionComponent>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <SectionComponent styles={styles.flexCenterContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ICNotificationProfile />
              <SpaceComponent width={8} />
              <TextComponent font="Poppins-Bold" text="Notifications" />
            </View>
            <ICChevronRight />
          </SectionComponent>
        </TouchableOpacity>
      </View>
      <SpaceComponent height={20} />

      {/* Component Tab 3 */}
      <View style={styles.boxBackground}>
        <SpaceComponent height={20} />
        <TouchableOpacity onPress={() => {}}>
          <SectionComponent styles={styles.flexCenterContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ICFAQs />
              <SpaceComponent width={8} />
              <TextComponent font="Poppins-Bold" text="FAQs" />
            </View>
            <ICChevronRight />
          </SectionComponent>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <SectionComponent styles={styles.flexCenterContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ICSettings />
              <SpaceComponent width={8} />
              <TextComponent font="Poppins-Bold" text="Settings" />
            </View>
            <ICChevronRight />
          </SectionComponent>
        </TouchableOpacity>
      </View>
      <SpaceComponent height={20} />

      {/* Component Tab 4 */}
      <View style={styles.boxBackground}>
        <SpaceComponent height={20} />
        <TouchableOpacity
          onPress={async () => {
            logout();
            await AsyncStorage.clear();
          }}>
          <SectionComponent styles={styles.flexCenterContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ICLogOut />
              <SpaceComponent width={8} />
              <TextComponent font="Poppins-Bold" text="Log Out" />
            </View>
            <ICChevronRight />
          </SectionComponent>
        </TouchableOpacity>
      </View>
    </SectionComponent>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  boxBackground: {
    backgroundColor: appColors.background1,
    borderRadius: 16,
  },
  flexCenterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
