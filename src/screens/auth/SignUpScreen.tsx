import {ArrowCircleRight2, Lock, Sms, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent} from '../../components';
import {appColors} from '../../constants';
import {LoadingModal} from '../../modal';
import {Validate} from '../../utils/validate';
import SocialLogin from './components/SocialLogin';
import authenticationAPI from '../../apis/authAPI';

const initValue = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (
      !errorMessage ||
      (errorMessage && (errorMessage.email || errorMessage.password || errorMessage.confirmPassword)) ||
      !values.email ||
      !values.password ||
      !values.confirmPassword
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [errorMessage, values]);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};
    data[`${key}`] = value;
    setValues(data);
  };

  const formValidator = (key: string) => {
    const data = {...errorMessage};
    let message = ``;

    switch (key) {
      case 'email':
        if (!values.email) {
          message = `Email is required!!!`;
        } else if (!Validate.email(values.email)) {
          message = 'Email is not invalid!!';
        } else {
          message = '';
        }

        break;

      case 'password':
        message = !values.password ? `Password is required!!!` : '';
        break;

      case 'confirmPassword':
        if (!values.confirmPassword) {
          message = `Please type confirm password!!`;
        } else if (values.confirmPassword !== values.password) {
          message = 'Password is not match!!!';
        } else {
          message = '';
        }

        break;
    }

    data[`${key}`] = message;

    setErrorMessage(data);
  };

  const handleRegister = async () => {
    const {email, password, confirmPassword} = values;

    const emailValidator = Validate.email(email);
    const passwordValidator = Validate.Password(password);

    if (email && password && confirmPassword) {
      if (emailValidator && values.password === values.confirmPassword) {
        setErrorMessage('');
        setIsLoading(true);
        try {
          const res = await authenticationAPI.HandleAuthentication('/register', values, 'post');
          setIsLoading(false);
          if (res.data?.accesstoken) {
            navigation.navigate('VerifyScreen');
          }
        } catch (error) {
          console.log('error', error);
          setIsLoading(false);
        }
      } else if (values.password !== values.confirmPassword) {
        setErrorMessage({
          confirmPassword: 'Mật khẩu và xác nhận mật khẩu không khớp!',
        });
      } else {
        setErrorMessage({general: 'Email not correct!'});
      }
    } else {
      setErrorMessage({general: 'Vui long nhap day du thong tin'});
    }
  };

  return (
    <>
      <ContainerComponent isImageBackground isScroll back>
        <SectionComponent>
          <TextComponent size={24} title text="Sign up" />
          <SpaceComponent height={21} />
          <InputComponent
            value={values.userName}
            placeholder="User name"
            onChange={val => handleChangeValue('userName', val)}
            allowClear
            affix={<User size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.email}
            placeholder="Email"
            onChange={val => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColors.gray} />}
            onEnd={() => formValidator('email')}
          />
          <InputComponent
            value={values.password}
            placeholder="Password"
            onChange={val => handleChangeValue('password', val)}
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
            isPassword
            onEnd={() => formValidator('password')}
          />
          <InputComponent
            value={values.confirmPassword}
            placeholder="Confirm password"
            onChange={val => handleChangeValue('confirmPassword', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
            onEnd={() => formValidator('confirmPassword')}
          />
        </SectionComponent>
        {/* {errorMessage && (
          <SectionComponent>
            {Object.keys(errorMessage).map(
              (error, index) =>
                errorMessage[`${error}`] && (
                  <TextComponent
                    text={errorMessage[`${error}`]}
                    key={`error${index}`}
                    color={appColors.danger}
                  />
                ),
            )}
          </SectionComponent>
        )} */}
        {errorMessage && (
          <SectionComponent>
            {errorMessage.general && <TextComponent text={errorMessage.general} color={appColors.danger} />}
            {Object.keys(errorMessage).map(
              (error, index) =>
                error !== 'general' && errorMessage[`${error}`] && <TextComponent text={errorMessage[`${error}`]} key={`error${index}`} color={appColors.danger} />,
            )}
          </SectionComponent>
        )}

        <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent
            // disable={isDisable}
            onPress={handleRegister}
            type="primary"
            text="SIGN UP"
            iconFlex="right"
            icon={<ArrowCircleRight2 size="32" color="white" />}
          />
        </SectionComponent>
        <SectionComponent>
          <SocialLogin />
        </SectionComponent>
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Alredy have an account? " />
            <ButtonComponent type="link" text="SignIn" onPress={() => navigation.navigate('LoginScreen')} />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  );
};

export default SignUpScreen;
