import React, { FunctionComponent } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';

import { Colors } from '../../styles';
// types
import { BigText } from '../../components';

const Home: FunctionComponent = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#F5F5F5' }}>
      <StatusBar backgroundColor={Colors.PRIMARY} barStyle={'dark-content'} />
      <View>
        <View
          style={{
            marginTop: -265.63,
            borderRadius: 90,
            height: 400,
            marginLeft: -60,
            width: 568.19,
            transform: [{ rotate: '-24.92deg' }],
            backgroundColor: Colors.PRIMARY,
          }}
        ></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            width: '100%',
            paddingHorizontal: 10,
            top: 21,
          }}
        >
          <BigText textStyle={{ fontWeight: '800' }}>Seller Center</BigText>
          <BigText>Icon</BigText>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 63.33,
            width: '100%',
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              height: 54,
              backgroundColor: '#FFFAFA',
              borderRadius: 10,

              shadowColor: 'black',
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 5,
            }}
          ></View>
        </View>

        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              height: 109,
              backgroundColor: '#FFFAFA',
              borderRadius: 10,

              shadowColor: 'black',
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 5,
            }}
          ></View>
        </View>
        <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
          <View
            style={{
              height: 155,
              backgroundColor: '#FFFAFA',
              borderRadius: 10,

              shadowColor: 'black',
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 5,
            }}
          ></View>
        </View>
        <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
          <View
            style={{
              height: 155,
              backgroundColor: '#FFFAFA',
              borderRadius: 10,

              shadowColor: 'black',
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 5,
            }}
          ></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
