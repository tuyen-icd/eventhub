import {ReactNode} from 'react';
import {FormProvider as Form, type FieldValues, type SubmitHandler, type UseFormReturn} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues> = {
  children: ReactNode;
  methods: UseFormReturn<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
};

const FormProvider = <TFormValues extends FieldValues>({children, onSubmit, methods}: FormProps<TFormValues>) => {
  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormProvider;
