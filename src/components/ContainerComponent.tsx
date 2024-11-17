import React, {ReactNode} from 'react';
import {ImageBackground, ScrollView, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import RowComponent from './RowComponent';
import {ArrowLeft} from 'iconsax-react-native';
import {appColors, fontFamilies} from '../constants';
import TextComponent from './TextComponent';
import {ICBackWhite} from '../assets/svgs';
import {HEIGHT_SCREEN, scale, scaleModerate, WIDTH_SCREEN} from '../utils/scaleDimentions';

interface Props {
    isImageBackground?: boolean;
    isScroll?: boolean;
    title?: string;
    children: ReactNode;
    back?: boolean;
}
const ContainerComponent = (props: Props) => {
    const {isImageBackground, isScroll, title, children, back} = props;
    const navigation = useNavigation();
    const headerComponent = () => {
        return (
            <View style={{flex: 1, paddingTop: 50}}>
                {(title || back) && (
                    <RowComponent
                        styles={{
                            paddingHorizontal: 16,
                            paddingVertical: 10,
                            minWidth: 48,
                            minHeight: 48,
                            justifyContent: 'flex-start',
                        }}>
                        {back && (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{marginRight: 12}}>
                                <ICBackWhite style={{width: 45, height: 45}} />
                            </TouchableOpacity>
                        )}
                        {title ? (
                            <TextComponent
                                text={title}
                                size={16}
                                font={fontFamilies.medium}
                                flex={1}
                            />
                        ) : (
                            <></>
                        )}
                    </RowComponent>
                )}
                {returnContainer}
            </View>
        );
    };

    const returnContainer = isScroll ? (
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            {children}
        </ScrollView>
    ) : (
        <View style={{flex: 1}}>{children}</View>
    );
    return isImageBackground ? (
        <ImageBackground
            source={require('../assets/images/LogIn_Empty.png')}
            style={{flex: 1}}
            imageStyle={{flex: 1}}
            resizeMode="cover">
            <View style={{flex: 1}}>{headerComponent()}</View>
        </ImageBackground>
    ) : (
        <SafeAreaView style={[globalStyles.container]}>
            <View>{headerComponent()}</View>
        </SafeAreaView>
    );
};

export default ContainerComponent;
