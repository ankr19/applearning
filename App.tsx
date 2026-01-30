import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home-srceen';
import "./global.css";

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    // headerStyle: { backgroundColor: 'tomato' },
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}