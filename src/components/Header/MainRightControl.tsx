import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {ICBackBlack, ICBackGray, ICBackWhite, ICCart, ICClose, ICFilter, ICMore, ICSave, ICSearch} from '../../assets/svgs';
import {scale} from '../../utils/scaleDimentions';
import {appColors} from '../../constants';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

interface NotiNumberProps {
  number: number;
}

interface NotiDotProps {
  isVisible: boolean;
}

const NotiNumber: FC<NotiNumberProps> = ({number}) => {
  return number > 0 ? (
    <View>
      <Text>{number}</Text>
    </View>
  ) : (
    <View />
  );
};

const NotiDot: FC<NotiDotProps> = ({isVisible}) => {
  return isVisible ? (
    <View>
      <Text>Test this here!</Text>
    </View>
  ) : (
    <></>
  );
};

interface MainRightControlProps {
  visibleNotification?: boolean;
  visibleFavious?: boolean;
  visibleShort?: boolean;
}

const MainRightControl: FC<MainRightControlProps> = ({visibleNotification, visibleFavious, visibleShort}) => {
  let shakeAnimation = new Animated.Value(0);
  const navigation: any = useNavigation();
  const [dataNotification, setDataNotification] = useState<any>(null);

  //   const getNotificationTestApp = async () => {
  //     try {
  //       const response = await getNotification();
  //       if (response) {
  //         setDataNotification(response);
  //       } else {
  //         console.error('Received data is not an array', response);
  //       }
  //     } catch (error) {
  //       console.log('error_getNotificationTestApp', error);
  //     }
  //   };

  useFocusEffect(
    React.useCallback(() => {
      // This effect will run when the screen is focused
      console.log('HomeScreen is focused');
      //   getNotificationTestApp();

      return () => {
        // This cleanup function will run when the screen is unfocused
        console.log('HomeScreen is unfocused');
      };
    }, []),
  );

  return (
    <>
      {visibleFavious && (
        <Animated.View style={{transform: [{translateX: shakeAnimation}]}}>
          <TouchableOpacity style={[styles.icon, {marginRight: 20}]} onPress={() => console.log('favious')}>
            <ICSave />
            <NotiNumber number={0} />
          </TouchableOpacity>
        </Animated.View>
      )}
      {visibleNotification && (
        <TouchableOpacity style={styles.icon} onPress={() => console.log('notification')}>
          {!dataNotification?.isRead ? <ICSave /> : <ICSave />}
        </TouchableOpacity>
      )}
      {visibleShort && (
        <TouchableOpacity style={styles.icon} onPress={() => console.log('short')}>
          <ICFilter />
          <NotiDot isVisible={true} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default MainRightControl;

const styles = StyleSheet.create({
  icon: {
    marginRight: scale(16),
  },
  notiNumberContainer: {
    position: 'absolute',
    top: -8,
    right: -8,
    height: scale(19),
    width: scale(19),
    backgroundColor: appColors.primary,
    borderRadius: 100,
  },
  notiDotContainer: {
    position: 'absolute',
    top: scale(0),
    right: scale(1),
    height: scale(10),
    width: scale(10),
    backgroundColor: appColors.primary,
    borderRadius: 100,
  },
  notiNumber: {
    fontSize: scale(10),
  },
});
