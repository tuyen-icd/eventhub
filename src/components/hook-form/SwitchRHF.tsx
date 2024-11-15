import {Controller, useFormContext} from 'react-hook-form';
import {Switch} from 'react-native';

interface ISwitch {
  name: string;
  fieldProps?: any;
}

const SwitchRHF = ({name, fieldProps}: ISwitch) => {
  const {control} = useFormContext();

  return <Controller name={name} control={control} render={({field: {onChange, value}}) => <Switch value={value} onValueChange={onChange} {...fieldProps} />} />;
};

export default SwitchRHF;
