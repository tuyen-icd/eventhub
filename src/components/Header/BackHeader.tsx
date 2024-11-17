import {
    Platform,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    ICBackBlack,
    ICBackGray,
    ICBackWhite,
    ICCart,
    ICClose,
    ICFilter,
    ICMore,
    ICSave,
    ICSearch,
} from '../../assets/svgs';
import {scale} from '../../utils/scaleDimentions';
import {appColors} from '../../constants';
import SpaceComponent from '../SpaceComponent';

interface Props {
    containerStyle?: StyleProp<TextStyle>;
    title?: string;
    children?: React.ReactNode;
    btn?: string;
    goBackHandle?: () => void;
}
const BackHeader = (props: Props) => {
    const {containerStyle, title, children, btn, goBackHandle} = props;
    const navigation: any = useNavigation();
    return (
        <View style={styles.flexRow}>
            <TouchableOpacity
                onPress={() => {
                    if (navigation.canGoBack()) {
                        navigation.goBack();
                    } else {
                        navigation.navigate('UserTab' as any);
                    }
                    goBackHandle && goBackHandle();
                }}>
                <View
                    style={{
                        width: scale(30),
                        height: scale(30),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    {btn === 'white' ? (
                        <ICBackWhite />
                    ) : btn === 'gray' ? (
                        <ICBackGray />
                    ) : btn === 'black' ? (
                        <ICBackBlack />
                    ) : (
                        <ICBackBlack />
                    )}
                </View>
            </TouchableOpacity>
            <SpaceComponent width={17} />
            <Text style={styles.txtTileHeader}>{title}</Text>
            {children && children}
        </View>
    );
};

export default BackHeader;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(20),
    },
    container: {
        flexDirection: 'row',
        paddingTop: Platform.OS === 'ios' ? scale(50) : scale(20),
        paddingBottom: scale(20),
        paddingHorizontal: scale(16),
        alignItems: 'center',
        backgroundColor: appColors.danger,
    },
    txtTileHeader: {
        fontSize: 17,
        fontWeight: '700',
        // lineHeight: 15,
        letterSpacing: 0.5,
        color: appColors.text,
    },
});
