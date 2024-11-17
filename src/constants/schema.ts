import * as Yup from 'yup';

export const SCHEMA_LOGIN = Yup.object().shape({
    email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập Email'),
    password: Yup.string().required('Vui lòng nhập Password'),
    isRemember: Yup.boolean(),
});

export const SCHEMA_SIGNUP = Yup.object().shape({
    userName: Yup.string().required('Vui lòng nhập Tên người dùng'),
    email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập Email'),
    password: Yup.string().required('Vui lòng nhập Password'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Mật khẩu không trùng khớp')
        .required('Vui lòng nhập xác nhận mật khẩu'),
});
