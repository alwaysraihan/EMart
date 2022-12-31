import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import React, { FunctionComponent, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { BigText } from '../components';
import { RootStackParamList } from '../navigators/RootStack';
import { Colors } from '../styles';
type NavigationProps = StackScreenProps<RootStackParamList, 'Splash'>;

const Splash: FunctionComponent<NavigationProps> = ({ navigation }) => {
  useEffect(() => {
    const getUserData = async () => {
      const accessToken = await AsyncStorage.getItem('user_data');
      const timer = setTimeout(() => {
        if (accessToken) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('Authentication');
        }
      }, 2500);
    };
    getUserData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
      }}
    >
      <StatusBar backgroundColor={Colors.WHITE} />
      <BigText textStyle={{ color: Colors.PRIMARY, fontWeight: '700', fontSize: 30 }}>
        SPLASH
      </BigText>
    </View>
  );
};

export default Splash;
