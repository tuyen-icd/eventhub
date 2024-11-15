import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Loader from '../Loader';

interface LoaderContainerProps {
  children: any;
  isLoading: boolean;
  height?: number;
  isGradually?: boolean;
  containerStyles?: any;
}

const LoaderContainer = ({
  children,
  isLoading = false,
  height,
  isGradually = true,
  containerStyles = {
    height: '100%',
  },
}: LoaderContainerProps) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const isVisible = () => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isLoading || !isGradually) return;

    setTimeout(() => {
      isVisible();
    }, 300);
  }, [isLoading]);

  return (
    <View style={containerStyles}>
      <View style={[!isLoading && styles.hide, {height: height || '100%'}]}>
        <Loader isVisible={true} />
      </View>
      <Animated.View style={[{flex: 1}, isLoading && styles.hide, isGradually && {opacity: opacityAnim}]}>{children}</Animated.View>
    </View>
  );
};

export default LoaderContainer;

const styles = StyleSheet.create({
  hide: {
    display: 'none',
  },
});
