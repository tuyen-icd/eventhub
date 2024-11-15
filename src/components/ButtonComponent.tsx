import React, {ReactNode} from 'react';
import {ActivityIndicator, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {appColors, fontFamilies} from '../constants';
import {globalStyles} from '../styles/globalStyles';
import TextComponent from './TextComponent';

interface Props {
  icon?: ReactNode;
  text?: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disable?: boolean;
  isLoading?: boolean;
}

const ButtonComponent = (props: Props) => {
  const {icon, text, textColor, textStyles, textFont, color, styles, onPress, iconFlex, type, disable, isLoading} = props;

  return type === 'primary' ? (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        disabled={disable || isLoading}
        onPress={onPress}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color ? color : disable ? appColors.gray4 : appColors.primary,
            marginBottom: 17,
            width: '100%',
          },
          styles,
        ]}>
        {isLoading ? <ActivityIndicator size="small" color={appColors.white} style={{marginRight: 10}} /> : icon && iconFlex === 'left' && icon}
        <TextComponent
          text={text}
          color={textColor ?? appColors.white}
          styles={[
            textStyles,
            {
              marginLeft: icon ? 12 : 0,
              fontSize: 16,
              textAlign: 'center',
            },
          ]}
          flex={icon && iconFlex === 'right' ? 1 : 0}
          font={textFont ?? fontFamilies.medium}
        />
        {icon && iconFlex === 'right' && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent flex={0} text={text} color={type === 'link' ? appColors.primary : appColors.text} />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
