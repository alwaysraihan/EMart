import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { UserIcon } from 'react-native-heroicons/outline';
import { BigText, RegularText } from '../../components';
import { Colors } from '../../styles';

const Dashboard = () => {
  interface userData {
    id?: number | string;
    customer_name?: string;
    mobile_no?: string | number;
    email_address?: string;
    country?: null | string;
    password?: string | number;
    address?: string;
    google_id?: null | string | number;
    created_at?: string | number;
    updated_at?: string | number;
  }
  const [userData, setUserData] = useState<userData>({});
  useEffect(() => {
    const getData = async () => {
      const data = await AsyncStorage.getItem('user_data');

      if (data !== null) {
        setUserData(await JSON.parse(data));
      } else {
        return;
      }
    };
    getData();
  }, []);
  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* left side */}
        <View>
          <View style={{ flexDirection: 'row' }}>
            <BigText textStyle={{ color: Colors.BLACK, fontWeight: '500' }}>Hello, </BigText>
            <BigText textStyle={{ color: Colors.PRIMARY, fontWeight: '700' }}>
              {userData.customer_name}
            </BigText>
          </View>
          <RegularText textStyle={{ marginTop: 1, color: Colors.SECONDARY }}>
            {userData.mobile_no}
          </RegularText>
        </View>
        {/* right side  */}
        <View
          style={{
            height: 40,
            width: 40,
            padding: 2.5,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 12,
          }}
        >
          <UserIcon color={Colors.WHITE} size={35} />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
