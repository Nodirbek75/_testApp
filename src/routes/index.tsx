import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Hooks, MobX} from 'screens';

const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Hooks"
        component={Hooks}
        options={{headerShown: false}}
      />
      <Tab.Screen name="MobX" component={MobX} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Layout = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);

export default Layout;
