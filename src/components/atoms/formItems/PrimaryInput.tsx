import React, { FC, useState } from 'react';
import {
  KeyboardType,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import { Colors } from '../../../styles';
import { FONT_FAMILY_REGULAR } from './../../../styles/typography';

interface inputProps {
  placeholder: string;
  value: string;
  keyboardType?: KeyboardType;
  secureTextEntry?: true;
  onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void) | undefined;
}
export const PrimaryInput: FC<inputProps> = ({
  placeholder,
  value,
  keyboardType,
  onChange,
  secureTextEntry,
}) => {
  const [borderColor, setBorderColor] = useState<string>('#E2E2E2');
  return (
    <TextInput
      placeholder={placeholder ? placeholder : 'Enter your text...'}
      keyboardType={keyboardType ? keyboardType : 'default'}
      value={value}
      secureTextEntry={secureTextEntry ? secureTextEntry : false}
      onChange={onChange}
      onBlur={() => setBorderColor('#E2E2E2')}
      onFocus={() => setBorderColor(Colors.PRIMARY)}
      style={{
        width: '100%',
        fontSize: 12,
        borderWidth: 1,
        borderColor: borderColor,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontWeight: '400',
        borderRadius: 5,
        fontFamily: FONT_FAMILY_REGULAR,
      }}
    ></TextInput>
  );
};
