import {yupResolver} from '@hookform/resolvers/yup';
import {ArrowCircleRight2, Lock, Sms, User} from 'iconsax-react-native';
import React, {useState} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {Alert, ScrollView, View} from 'react-native';
import {
    ButtonComponent,
    ContainerComponent,
    RowComponent,
    SectionComponent,
    SpaceComponent,
    TextComponent,
} from '../../components';
import InputRHF from '../../components/hook-form/InputRHF';
import {appColors, fontFamilies} from '../../constants';
import {SCHEMA_SIGNUP} from '../../constants/schema';
import {LoadingModal} from '../../modal';
import {URL_API} from '../../constants/endpoints';
import authenticationAPI from '../../apis/authAPI';

const SignUpScreen = ({navigation}: any) => {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm({
        defaultValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(SCHEMA_SIGNUP),
    });

    const handleRegister: SubmitHandler<{
        userName: string;
        email: string;
        password: string;
        confirmPassword: string;
    }> = async values => {
        setIsLoading(true);

        try {
            const res = await authenticationAPI.HandleAuthentication(
                URL_API.VERIFICATION,
                {email: values.email},
                'post',
            );
            setIsLoading(false);
            navigation.navigate('Verification', {
                // code: res.data.code,
                code: 1234,
                ...values,
            });
        } catch (error) {
            console.error('Error during API call:', error);
            // Alert.alert(error.response?.data?.message || 'Đã xảy ra lỗi');
            setIsLoading(false);
        }
    };
    return (
        <>
            <ContainerComponent isImageBackground back>
                <SectionComponent styles={{alignItems: 'center'}}>
                    <TextComponent size={30} title text="Sign Up" color={appColors.white} />
                    <SpaceComponent height={12} />
                    <TextComponent
                        styles={{letterSpacing: 1}}
                        size={16}
                        text="Please sign up to get started"
                        color={appColors.white}
                    />
                </SectionComponent>
                <SpaceComponent height={50} />

                <SectionComponent
                    styles={{
                        flex: 1,
                        backgroundColor: 'white',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        width: '100%',
                    }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <FormProvider {...form}>
                            <View>
                                <SpaceComponent height={24} />
                                <TextComponent
                                    color={appColors.text}
                                    font={fontFamilies.regular}
                                    size={14}
                                    text="Tên người dùng"
                                    styles={{
                                        paddingBottom: 8,
                                        lineHeight: 16.84,
                                        letterSpacing: 0.5,
                                    }}
                                />
                                <InputRHF.Text
                                    name="userName"
                                    {...form}
                                    inputProps={{
                                        placeholder: 'UserName',
                                        affix: <User size={22} color={appColors.gray} />,
                                    }}
                                />

                                <SpaceComponent height={16} />
                                <TextComponent
                                    color={appColors.text}
                                    font={fontFamilies.regular}
                                    size={14}
                                    text="Địa chỉ Email"
                                    styles={{
                                        paddingBottom: 8,
                                        lineHeight: 16.84,
                                        letterSpacing: 0.5,
                                    }}
                                />
                                <InputRHF.Text
                                    name="email"
                                    {...form}
                                    inputProps={{
                                        placeholder: 'Email',
                                        affix: <Sms size={22} color={appColors.gray} />,
                                    }}
                                />
                                <SpaceComponent height={16} />
                                <TextComponent
                                    color={appColors.text}
                                    font={fontFamilies.regular}
                                    size={14}
                                    text="Mật khẩu"
                                    styles={{
                                        paddingBottom: 8,
                                        lineHeight: 16.84,
                                        letterSpacing: 0.5,
                                    }}
                                />
                                <InputRHF.Text
                                    name="password"
                                    {...form}
                                    inputProps={{
                                        isPassword: true,
                                        allowClear: true,
                                        placeholder: 'Password',
                                        affix: <Lock size={22} color={appColors.gray} />,
                                    }}
                                />
                                <SpaceComponent height={16} />
                                <TextComponent
                                    color={appColors.text}
                                    font={fontFamilies.regular}
                                    size={14}
                                    text="Xác nhận mật khẩu"
                                    styles={{
                                        paddingBottom: 8,
                                        lineHeight: 16.84,
                                        letterSpacing: 0.5,
                                    }}
                                />
                                <InputRHF.Text
                                    name="confirmPassword"
                                    {...form}
                                    inputProps={{
                                        isPassword: true,
                                        allowClear: true,
                                        placeholder: 'Confirm password',
                                        affix: <Lock size={22} color={appColors.gray} />,
                                    }}
                                />
                                <SpaceComponent height={37} />
                                <View>
                                    <ButtonComponent
                                        onPress={form.handleSubmit(handleRegister)}
                                        type="primary"
                                        text="ĐĂNG KÝ"
                                        iconFlex="right"
                                        icon={<ArrowCircleRight2 size="32" color="white" />}
                                    />
                                </View>
                                <SpaceComponent height={16} />
                                <SectionComponent>
                                    <RowComponent justify="center">
                                        <TextComponent text="Bạn đã có tài khoản? " />
                                        <ButtonComponent
                                            type="link"
                                            text="Đăng nhập"
                                            onPress={() => navigation.navigate('LoginScreen')}
                                        />
                                    </RowComponent>
                                </SectionComponent>
                                <ButtonComponent
                                    type="link"
                                    text="Verification"
                                    onPress={() => navigation.navigate('VerificationScreen')}
                                />
                            </View>
                        </FormProvider>
                    </ScrollView>
                </SectionComponent>
            </ContainerComponent>
            <LoadingModal visible={isLoading} />
        </>
    );
};

export default SignUpScreen;
