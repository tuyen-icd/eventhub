import * as Yup from 'yup';

export const SCHEMA_LOGIN = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  isRemember: Yup.boolean(),
});

