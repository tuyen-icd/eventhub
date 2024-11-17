import {Controller, useFormContext} from 'react-hook-form';
import InputComponent from '../InputComponent';

interface IText {
    name: string;
    inputProps?: any;
}
const Text = ({name, inputProps}: IText) => {
    const {control} = useFormContext();

    return (
        <Controller
            render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
                <InputComponent
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    {...inputProps}
                />
            )}
            name={name}
            control={control}
        />
    );
};

const Number = ({name, inputProps}: IText) => {
    const {control} = useFormContext();

    return (
        <Controller
            render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
                <InputComponent
                    type="number"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    {...inputProps}
                />
            )}
            name={name}
            control={control}
        />
    );
};

const InputRHF = {
    Text,
    Number,
};

export default InputRHF;
