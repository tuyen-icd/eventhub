import {View, Text, Image} from 'react-native';
import React from 'react';
import {SectionComponent, SpaceComponent, TextComponent} from '../../../components';
import {appColors, appInfo} from '../../../constants';
import {scale, scaleModerate} from '../../../utils/scaleDimentions';

interface Props {
    img?: any;
    title?: string;
    desc?: string;
}
const OnBoard = (props: Props) => {
    const {img, title, desc} = props;
    return (
        <SectionComponent styles={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <SpaceComponent height={114} />
            <Image
                style={{
                    width: '90%',
                    height: '40%',
                    resizeMode: 'cover',
                    borderRadius: 12,
                }}
                source={img}
            />
            <SpaceComponent height={63} />
            <TextComponent text={title} title size={24} />
            <SpaceComponent height={18} />
            <TextComponent
                text={desc}
                size={16}
                styles={{textAlign: 'center', lineHeight: 24}}
                color={appColors.gray}
            />
        </SectionComponent>
    );
};

export default OnBoard;
