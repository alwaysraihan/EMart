import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import Authentication from '../screens/Authentication';

import MainApp from '../screens/MainApp/MainApp';
import Splash from '../screens/Splash';

export type RootStackParamList = {
  MainApp: undefined;
  Splash: undefined;
  Authentication: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
          <Stack.Screen
            name="Authentication"
            component={Authentication}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default RootStack;
