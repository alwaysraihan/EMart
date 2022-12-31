import React from 'react';
import { Image, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { IC_ArrowDown, Il_Bangladeshi_Flag } from '../../res';
import { RegularText } from '../atoms';

export const LoginHeader = () => {
  return (
    <View
      style={{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}
    >
      <ChevronLeftIcon color={'#1C1B1F'} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={Il_Bangladeshi_Flag} style={{ height: 16, width: 25 }} />
        <RegularText
          textStyle={{
            textTransform: 'uppercase',
            color: '#505050',
            fontWeight: '400',
            marginHorizontal: 3,
          }}
        >
          Bangladesh
        </RegularText>
        <Image source={IC_ArrowDown} style={{ height: 5.4, width: 9 }} />
        <RegularText
          textStyle={{ color: '#A7A7A7', fontWeight: '800', marginHorizontal: 9, fontSize: 25 }}
        >
          |
        </RegularText>
        <RegularText
          textStyle={{
            textTransform: 'uppercase',
            color: '#505050',
            fontWeight: '400',
            marginHorizontal: 3,
          }}
        >
          English
        </RegularText>
        <Image source={IC_ArrowDown} style={{ height: 5.4, width: 9 }} />
      </View>
    </View>
  );
};
