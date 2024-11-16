import {Sms, User} from 'iconsax-react-native';
import React, {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICEdit} from '../../assets/svgs';
import {InputComponent, SectionComponent, SpaceComponent} from '../../components';
import BackHeader from '../../components/Header/BackHeader';
import InputRHF from '../../components/hook-form/InputRHF';
import {appColors} from '../../constants';
import {useAuthStore} from '../../stores/auth.store';
import {yupResolver} from '@hookform/resolvers/yup';

const initValue = {
  userName: '',
  email: '',
  phone: '',
  bio: '',
};
const EditProfile = ({natigation}: any) => {
  const auth = useAuthStore(state => state.auth);
  const [values, setValues] = useState(initValue);

  const handleChangeValue = (p0?: string, val?: string) => {};

  return (
    <SectionComponent styles={{flex: 1, backgroundColor: 'white'}}>
      <SpaceComponent height={70} />
      <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
        <BackHeader btn="gray" title={'Edit Profile'} />
      </View>
      <SpaceComponent height={24} />
      {/* Avatar */}
      <View style={{position: 'relative', alignItems: 'center', flex: 0}}>
        <Image source={{uri: auth?.image}} style={{width: 130, height: 130, borderRadius: 50}} />
        <View style={{position: 'absolute', bottom: 0, left: '60%', transform: [{translateX: -15}, {translateY: 0}]}}>
          <TouchableOpacity
            onPress={() => {
              console.log('Edit Avatar');
            }}>
            <ICEdit />
          </TouchableOpacity>
        </View>
      </View>
      <SpaceComponent height={30} />
      {/* Component Input */}

      <View>
        <InputComponent
          value={values.userName}
          placeholder="User name"
          onChange={val => handleChangeValue('userName', val)}
          allowClear
          affix={<User size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.userName}
          placeholder="Email"
          onChange={val => handleChangeValue('email', val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.userName}
          placeholder="Phone"
          onChange={val => handleChangeValue('phone', val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.userName}
          placeholder="Bio"
          onChange={val => handleChangeValue('bio', val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
      </View>
    </SectionComponent>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
