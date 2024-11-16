import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import MainRightControl from './MainRightControl';
import {scale} from '../../utils/scaleDimentions';
import {appColors} from '../../constants';

interface MainHeaderProps {
  containerStyle?: {};
  title?: string;
}

const MainHeader: FC<MainHeaderProps> = ({containerStyle, title}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title]}>{title}</Text>
      <View style={styles.emptyContainer}></View>
      <MainRightControl visibleNotification={true} visibleFavious={true} visibleShort={false} />
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? scale(50) : scale(20),
    paddingBottom: scale(20),
    paddingHorizontal: scale(10),
    alignItems: 'center',
    backgroundColor: appColors.primary,
  },
  emptyContainer: {
    flex: 1,
  },
  title: {
    marginLeft: scale(10),
  },
});
