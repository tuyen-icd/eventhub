import {StyleSheet, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

interface ILoader {
  isVisible: boolean;
  showLoadingView?: boolean;
  indicatorStyle?: any;
}

export default function Loader({isVisible, showLoadingView = false, indicatorStyle = {}}: ILoader) {
  return (
    <View style={[styles.container, {width: isVisible ? '100%' : 0, height: isVisible ? '100%' : 0}]}>
      {!showLoadingView && isVisible && <FastImage style={[styles.loading, indicatorStyle]} resizeMode="contain" source={require('../assets/images/ic_loading.gif')} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 5,
  },
  loading: {
    aspectRatio: 1,
    height: 100,
  },
});
