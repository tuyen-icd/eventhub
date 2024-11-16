import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ButtonComponent, SectionComponent, SpaceComponent, TextComponent} from '../../components';
import BackHeader from '../../components/Header/BackHeader';
import {ICChevronRight, ICEmailProfile, ICMore, ICPersonalInfo} from '../../assets/svgs';
import {appColors} from '../../constants';
import {useAuthStore} from '../../stores/auth.store';

const PersonalInfo = ({navigation}: any) => {
    const auth = useAuthStore(state => state.auth);
    //   console.log(auth);
    return (
        <SectionComponent styles={{flex: 1, backgroundColor: 'white'}}>
            <SpaceComponent height={70} />
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}>
                <BackHeader btn="gray" title={'Personal Infor'} />

                <ButtonComponent
                    type="link"
                    text="Edit"
                    icon={ICMore}
                    onPress={() => {
                        navigation.navigate('EditProfile');
                    }}
                />
            </View>
            <SpaceComponent height={24} />

            {/* AVATAR */}
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 32,
                    }}>
                    <Image
                        source={{uri: auth?.image}}
                        style={{width: 100, height: 100, borderRadius: 50}}
                    />
                    <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                        <TextComponent
                            font="Poppins-Bold"
                            text={auth?.firstName + ' ' + auth?.lastName}
                            styles={{
                                fontSize: 20,
                                fontFamily: 'Poppins-Bold',
                                color: appColors.text,
                                textAlign: 'center',
                            }}
                        />
                        <TextComponent
                            font="Poppins-Bold"
                            text="I love fast food"
                            color={appColors.placeholderColor}
                        />
                    </View>
                </View>
            </View>
            <SpaceComponent height={32} />
            {/* Component Tab */}
            <View style={styles.boxBackground}>
                <SpaceComponent height={20} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('PersonalInfo');
                    }}>
                    <SectionComponent styles={styles.flexCenterContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <ICPersonalInfo />
                            <SpaceComponent width={8} />
                            <View>
                                <TextComponent font="Poppins-Bold" text="FULL NAME" />
                                <TextComponent text={auth?.firstName + ' ' + auth?.lastName} />
                            </View>
                        </View>
                    </SectionComponent>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <SectionComponent styles={styles.flexCenterContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <ICEmailProfile />
                            <SpaceComponent width={8} />
                            <View>
                                <TextComponent font="Poppins-Bold" text="EMAIL" />
                                <TextComponent text={auth?.email} />
                            </View>
                        </View>
                    </SectionComponent>
                </TouchableOpacity>
            </View>
        </SectionComponent>
    );
};

export default PersonalInfo;

const styles = StyleSheet.create({
    boxBackground: {
        backgroundColor: appColors.background1,
        borderRadius: 16,
    },
    flexCenterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
