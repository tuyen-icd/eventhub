import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ButtonComponent, ContainerComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent} from '../../components';
import {ArrowRight} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import {fontFamilies} from '../../constants';
import {globalStyles} from '../../styles/globalStyles';
import authenticationAPI from '../../apis/authApi';
import {LoadingModal} from '../../modal';

import AsyncStorage from '@react-native-async-storage/async-storage';

const VerificationScreen = ({navigation, route}: any) => {
  // const {code, email, password, username} = route.params;

  const email = '';
  const code = '';

  const [currentCode, setCurrentCode] = useState<string>(code);
  const [codeValues, setCodeValues] = useState<string[]>([]);
  const [newCode, setNewCode] = useState('');
  const [limit, setLimit] = useState(120);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();

  // useEffect(() => {
  //   ref1.current.focus();
  // }, []);

  // useEffect(() => {
  //   if (limit > 0) {
  //     const interval = setInterval(() => {
  //       setLimit(limit => limit - 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [limit]);

  // useEffect(() => {
  //   let item = ``;

  //   codeValues.forEach(val => (item += val));

  //   setNewCode(item);
  // }, [codeValues]);

  const handleChangeCode = (val: string, index: number) => {
    // const data = [...codeValues];
    // data[index] = val;
    // setCodeValues(data);
  };

  const handleResendVerification = async () => {};

  const handleVerification = async () => {};

  return (
    <ContainerComponent back isImageBackground isScroll>
      <SpaceComponent height={23} />

      <SectionComponent styles={{alignItems: 'center'}}>
        <TextComponent text="Verification" title color={appColors.white} />
        <SpaceComponent height={12} />
        <TextComponent color={appColors.white} text={`We’ve send you the verification code on ${email.replace(/.{1,5}/, (m: any) => '*'.repeat(m.length))}`} />
      </SectionComponent>

      <SpaceComponent height={26} />

      <SectionComponent styles={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '100%'}}>
        <SpaceComponent height={50} />

        <RowComponent justify="space-around">
          <TextInput
            keyboardType="number-pad"
            // ref={ref1}
            value={codeValues[0]}
            style={[styles.input]}
            maxLength={1}
            onChangeText={val => {
              val.length > 0 && ref2.current.focus();
              handleChangeCode(val, 0);
            }}
            // onChange={() => }
            placeholder="-"
          />
          <TextInput
            ref={ref2}
            value={codeValues[1]}
            keyboardType="number-pad"
            onChangeText={val => {
              handleChangeCode(val, 1);
              val.length > 0 && ref3.current.focus();
            }}
            style={[styles.input]}
            maxLength={1}
            placeholder="-"
          />
          <TextInput
            keyboardType="number-pad"
            value={codeValues[2]}
            ref={ref3}
            onChangeText={val => {
              handleChangeCode(val, 2);
              val.length > 0 && ref4.current.focus();
            }}
            style={[styles.input]}
            maxLength={1}
            placeholder="-"
          />
          <TextInput
            keyboardType="number-pad"
            ref={ref4}
            value={codeValues[3]}
            onChangeText={val => {
              handleChangeCode(val, 3);
            }}
            style={[styles.input]}
            maxLength={1}
            placeholder="-"
          />
        </RowComponent>

        {errorMessage && (
          <SectionComponent>
            <TextComponent styles={{textAlign: 'center'}} text={errorMessage} color={appColors.danger} />
          </SectionComponent>
        )}
        <SectionComponent>
          {limit > 0 ? (
            <RowComponent justify="center">
              <TextComponent text="Re-send code in  " flex={0} />
              <TextComponent text={`${(limit - (limit % 60)) / 60}:${limit - (limit - (limit % 60))}`} flex={0} color={appColors.link} />
            </RowComponent>
          ) : (
            <RowComponent>
              <ButtonComponent type="link" text="Resend email verification" onPress={handleResendVerification} />
            </RowComponent>
          )}
        </SectionComponent>
      </SectionComponent>
      <LoadingModal visible={isLoading} />
    </ContainerComponent>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  input: {
    height: 62,
    width: 62,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray2,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: fontFamilies.bold,
    textAlign: 'center',
  },
});
