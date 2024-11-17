import {Call, CardEdit, Sms, User} from 'iconsax-react-native';
import React, {useState} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICEdit} from '../../assets/svgs';
import {
    ButtonComponent,
    InputComponent,
    SectionComponent,
    SpaceComponent,
    TextComponent,
} from '../../components';
import BackHeader from '../../components/Header/BackHeader';
import InputRHF from '../../components/hook-form/InputRHF';
import {appColors, fontFamilies} from '../../constants';
import {useAuthStore} from '../../stores/auth.store';
import {yupResolver} from '@hookform/resolvers/yup';
import {SCHEMA_LOGIN} from '../../constants/schema';

const initValue = {
    userName: '',
    email: '',
    phone: '',
    bio: '',
};
const EditProfile = ({natigation}: any) => {
    const auth = useAuthStore(state => state.auth);
    const [values, setValues] = useState(initValue);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
            isRemember: true,
        },
        resolver: undefined,
    });

    const handleEditProfile: SubmitHandler<{
        userName?: string;
        email?: string;
        phone?: number;
        bio?: string;
    }> = values => {
        console.log('values :>> ', values);
        // login({...values, navigation}, isLoading => setIsLoading(isLoading));
    };

    return (
        <SectionComponent styles={{flex: 1, backgroundColor: 'white'}}>
            <SpaceComponent height={70} />
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}>
                <BackHeader btn="gray" title={'Edit Profile'} />
            </View>
            <SpaceComponent height={24} />
            {/* Avatar */}
            <View style={{position: 'relative', alignItems: 'center', flex: 0}}>
                <Image
                    source={{uri: auth?.image}}
                    style={{width: 130, height: 130, borderRadius: 50}}
                />
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '60%',
                        transform: [{translateX: -15}, {translateY: 0}],
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('Edit Avatar');
                        }}>
                        <ICEdit />
                    </TouchableOpacity>
                </View>
            </View>
            <SpaceComponent height={30} />
            {/* Component Input */}
            <FormProvider {...form}>
                <View>
                    <TextComponent
                        color={appColors.text}
                        font={fontFamilies.regular}
                        size={14}
                        text="USER NAME"
                        styles={{paddingBottom: 8, lineHeight: 16.84, letterSpacing: 0.5}}
                    />
                    <InputRHF.Text
                        name="userName"
                        {...form}
                        inputProps={{
                            placeholder: 'User Name',
                            affix: <User size={22} color={appColors.gray} />,
                        }}
                    />
                    <SpaceComponent height={14} />
                    <TextComponent
                        color={appColors.text}
                        font={fontFamilies.regular}
                        size={14}
                        text="EMAIL"
                        styles={{paddingBottom: 8, lineHeight: 16.84, letterSpacing: 0.5}}
                    />
                    <InputRHF.Text
                        name="email"
                        {...form}
                        inputProps={{
                            placeholder: 'Email',
                            affix: <Sms size={22} color={appColors.gray} />,
                        }}
                    />
                    <SpaceComponent height={14} />
                    <TextComponent
                        color={appColors.text}
                        font={fontFamilies.regular}
                        size={14}
                        text="PHONE"
                        styles={{paddingBottom: 8, lineHeight: 16.84, letterSpacing: 0.5}}
                    />
                    <InputRHF.Number
                        name="phone"
                        {...form}
                        inputProps={{
                            placeholder: 'Phone',
                            affix: <Call size={22} color={appColors.gray} />,
                        }}
                    />
                    <SpaceComponent height={14} />
                    <TextComponent
                        color={appColors.text}
                        font={fontFamilies.regular}
                        size={14}
                        text="BIO"
                        styles={{paddingBottom: 8, lineHeight: 16.84, letterSpacing: 0.5}}
                    />
                    <InputRHF.Text
                        name="bio"
                        {...form}
                        inputProps={{
                            placeholder: 'Bio',
                            affix: <CardEdit size={22} color={appColors.gray} />,
                        }}
                    />

                    <SpaceComponent height={22} />
                    <View>
                        <ButtonComponent
                            onPress={form.handleSubmit(handleEditProfile)}
                            type="primary"
                            text="Lưu"
                            isLoading={isLoading}
                        />
                    </View>
                </View>
            </FormProvider>
        </SectionComponent>
    );
};

export default EditProfile;

const styles = StyleSheet.create({});
