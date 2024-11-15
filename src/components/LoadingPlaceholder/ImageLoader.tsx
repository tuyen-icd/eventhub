import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Loader from '../Loader';

interface LoaderContainerProps {
  source: any;
  height?: number;
  isGradually?: boolean;
}

const ImageLoader = ({height, source, isGradually = true}: LoaderContainerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const isVisible = () => {
    if (!isGradually) return;

    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <View style={[!isLoading && styles.hide, {height: height || '100%'}]}>
        <Loader isVisible={false} />
      </View>
      <Animated.View style={[isLoading && styles.hide, isGradually && {opacity: opacityAnim}]}>
        <FastImage
          source={source}
          style={{height: height || '100%'}}
          onLoadStart={() => {
            setIsLoading(true);
          }}
          onLoadEnd={() => {
            setIsLoading(false);
            isVisible();
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </Animated.View>
    </View>
  );
};

export default ImageLoader;

const styles = StyleSheet.create({
  hide: {
    display: 'none',
  },
});
