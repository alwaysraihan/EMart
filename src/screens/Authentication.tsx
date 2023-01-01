import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import React, { FunctionComponent, useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  ToastAndroid,
  View,
} from 'react-native';
import { BigText, KeyboardAvoidingWrapper, LoginHeader, RegularText } from '../components';
import PrimaryButton from '../components/atoms/buttons/PrimaryButton';
import { PrimaryInput } from '../components/atoms/formItems/PrimaryInput';
import { RootStackParamList } from '../navigators/RootStack';
import { Il_Login_Background } from '../res';
import { Colors } from '../styles';

var height = Dimensions.get('window').height;
type NavigationProps = StackScreenProps<RootStackParamList, 'Authentication'>;
const Authentication: FunctionComponent<NavigationProps> = ({ navigation }) => {
  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  };
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const getData = async () => {
    if (!phoneNumber) {
      return showToast('Enter a phone number or email address');
    }
    if (!password) {
      return showToast('Enter a password');
    }
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email_address: phoneNumber,
        password: password,
      }),
    };
    const response = await fetch(
      'https://www.atlantisdecora.com/api/customer-login',
      configurationObject
    );
    const data = await response.json();
    if (!data.success) {
      setPhoneNumber('');
      setPassword('');
      return showToast('Wrong Information, Try Again!');
    }
    if (data.success && data.access_token && data.userData) {
      AsyncStorage.setItem('access_token', data.access_token);
      AsyncStorage.setItem('user_data', JSON.stringify(data.userData));
      navigation.replace('MainApp');
    }
    return console.log(data);
  };

  const handleLogin = () => {
    getData();
  };
  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
        <StatusBar backgroundColor={'#EDFAFF'} barStyle={'dark-content'} />
        <ImageBackground
          source={Il_Login_Background}
          resizeMode={'cover'}
          style={{ height: height }}
        >
          <LoginHeader />
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: 38, marginTop: 133 }}>
              {/* Header section  */}
              {/* Title and input==> middle section  */}
              <BigText textStyle={{ color: Colors.BLACK, fontWeight: '700', lineHeight: 19 }}>
                Welcome back
              </BigText>
              <RegularText
                textStyle={{
                  color: '#303030',
                  fontWeight: '400',
                  marginTop: 12,
                  marginBottom: 25,
                  lineHeight: 19,
                }}
              >
                Login with your password
              </RegularText>
              <PrimaryInput
                placeholder="Phone or Email"
                keyboardType="default"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.nativeEvent.text)}
                // onChange={(event) => setPhoneNumber(event.nativeEvent.text.replace(/[^0-9]/g, ''))}
              ></PrimaryInput>
              <View style={{ marginTop: 11 }}></View>
              <PrimaryInput
                placeholder="Password"
                keyboardType="default"
                value={password}
                onChange={(event) => setPassword(event.nativeEvent.text)}
                secureTextEntry
              ></PrimaryInput>
            </View>

            {/* bottom section  */}
            <View style={{ paddingHorizontal: 25, marginBottom: 45 }}>
              <RegularText textStyle={{ color: Colors.PRIMARY, marginBottom: 21 }}>
                Forgot Password?
              </RegularText>
              <PrimaryButton
                onPress={() => {
                  handleLogin();
                }}
                textStyle={{ fontWeight: 'bold', fontSize: 16 }}
              >
                Login
              </PrimaryButton>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default Authentication;
