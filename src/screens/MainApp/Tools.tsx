import React from 'react';
import { View } from 'react-native';
import { BigText } from '../../components';
import { Colors } from '../../styles';

const Tools = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BigText textStyle={{ color: Colors.PRIMARY, fontWeight: '800' }}>Tools Screen</BigText>
    </View>
  );
};

export default Tools;
