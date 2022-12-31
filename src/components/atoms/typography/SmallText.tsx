import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// colors
import { Colors } from '../../../styles';

import { FONT_FAMILY_REGULAR } from '../../../styles/typography';
import { TextProps } from './Types';
const StyledText = styled.Text`
  font-size: 12px;
  color: ${Colors.GRAY_DARK};
  text-align: left;
  font-family: ${FONT_FAMILY_REGULAR};
`;
export const SmallText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyle}>{props.children}</StyledText>;
};
