import React, { FunctionComponent, ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../../styles';
import { RegularText } from '../typography';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${Colors.PRIMARY};
  width: 100%;
  padding: 10px 15px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;
interface primaryButtonProps {
  textStyle?: StyleProp<TextStyle>;
  children?: ReactNode;
  btnStyles?: StyleProp<ViewStyle>;
  onPress: (() => void) | undefined;
  // onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
}

const PrimaryButton: FunctionComponent<primaryButtonProps> = ({
  onPress,
  children,
  btnStyles,
  textStyle,
}) => {
  return (
    <ButtonView style={btnStyles} onPress={onPress}>
      <RegularText textStyle={textStyle}>{children}</RegularText>
    </ButtonView>
  );
};

export default PrimaryButton;
