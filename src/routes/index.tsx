import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Hooks, MobX} from 'screens';

const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#14b009'},
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ccc',
      }}>
      <Tab.Screen
        name="Hooks"
        component={Hooks}
        options={{
          headerShown: false,
          tabBarIcon: () => null,
          tabBarLabelStyle: {
            fontSize: 18,
          },
        }}
      />
      <Tab.Screen
        name="MobX"
        component={MobX}
        options={{
          headerShown: false,
          tabBarIcon: () => null,
          tabBarLabelStyle: {
            fontSize: 18,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Layout = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);

export default Layout;
