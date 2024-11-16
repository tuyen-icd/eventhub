import React, {ReactNode, useState} from 'react';
import {KeyboardType, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {appColors} from '../constants/appColors';
import {globalStyles} from '../styles/globalStyles';
import TextComponent from './TextComponent';
import {FieldError} from 'react-hook-form';

interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;
  helperText?: string;
  error?: FieldError;
  onEnd?: () => void;
  onBlur?: () => void;
}

const InputComponent = (props: Props) => {
  const {value, onChange, affix, suffix, placeholder, isPassword, allowClear, type, helperText, error, onEnd, onBlur} = props;

  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);

  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error ? appColors.danger : appColors.input,
            backgroundColor: appColors.input,
          },
        ]}>
        {affix ?? affix}
        <TextInput
          style={[styles.input, globalStyles.text]}
          value={value}
          placeholder={placeholder ?? ''}
          onChangeText={val => onChange(val)}
          onBlur={onBlur}
          secureTextEntry={isShowPass}
          placeholderTextColor={'#747688'}
          keyboardType={type ?? 'default'}
          autoCapitalize="none"
          onEndEditing={onEnd}
        />
        {suffix ?? suffix}
        <TouchableOpacity onPress={isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')}>
          {isPassword ? (
            <FontAwesome name={isShowPass ? 'eye-slash' : 'eye'} size={22} color={error ? appColors.danger : appColors.gray} />
          ) : (
            value?.length > 0 && allowClear && <AntDesign name="close" size={22} color={error ? appColors.danger : appColors.text} />
          )}
        </TouchableOpacity>
      </View>
      {helperText ||
        (error && (
          <TextComponent
            text={error ? error?.message : helperText}
            color={error ? appColors.danger : appColors.text}
            styles={{
              marginBottom: 10,
            }}
          />
        ))}
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 10,
  },

  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text,
  },
});
