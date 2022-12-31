import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BottomNavigation from '../../components/molecules/BottomNavigation';
import Dashboard from './Dashboard';
import Data from './Data';
import Home from './Home';
import Message from './Message';
import Tools from './Tools';
const Tab = createBottomTabNavigator();
export default function MainApp() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Tools" component={Tools} options={{ headerShown: false }} />
      <Tab.Screen name="Data" component={Data} options={{ headerShown: false }} />
      <Tab.Screen name="Message" component={Message} options={{ headerShown: false }} />
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
