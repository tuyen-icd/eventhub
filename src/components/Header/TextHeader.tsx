import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../utils/scaleDimentions';
import {appColors} from '../../constants';

interface TextHeaderProps {
  containerStyle?: {};
  controlLeft: any;
  controlRight: any;
}

const TextHeader: FC<TextHeaderProps> = ({containerStyle, controlLeft, controlRight}) => {
  const navigation = useNavigation();

  if (!controlLeft.title) {
    controlLeft = {
      title: `Back`,
      onPressLeft: () => {
        navigation.goBack();
      },
    };
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={() => controlLeft?.onPressLeft()}>
        <Text style={[styles.title]}>{controlLeft?.title}</Text>
      </TouchableOpacity>
      <View style={styles.emptyContainer}></View>
      {controlRight?.title && (
        <TouchableOpacity onPress={() => controlRight?.onPressRight()}>
          <Text style={[styles.title, styles.redText]}>{controlRight?.title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? scale(50) : scale(20),
    paddingBottom: scale(20),
    paddingHorizontal: scale(16),
    alignItems: 'center',
    backgroundColor: appColors.placeholderColor,
  },
  emptyContainer: {
    flex: 1,
  },
  title: {
    marginLeft: scale(10),
    marginRight: scale(10),
  },
  redText: {
    color: appColors.placeholderColor,
    fontWeight: '600',
  },
});
