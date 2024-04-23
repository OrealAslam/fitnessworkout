import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BoardingScreen1 from '../screens/BoardingScreens/BoardingScreen1';
import BoardingScreen2 from '../screens/BoardingScreens/BoardingScreen2';
import BoardingScreen3 from '../screens/BoardingScreens/BoardingScreen3';
import BoardingScreen4 from '../screens/BoardingScreens/BoardingScreen4';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import StartScreen from '../screens/StartScreen';
import MainRoute from './MainRoute';

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoardingScreen1"
        component={BoardingScreen1}
        options={{headerShown: false, animationenabled: false}}
      />
      <Stack.Screen
        name="BoardingScreen2"
        component={BoardingScreen2}
        options={{headerShown: false, animationenabled: false}}
      />
      <Stack.Screen
        name="BoardingScreen3"
        component={BoardingScreen3}
        options={{headerShown: false, animationenabled: false}}
      />
      <Stack.Screen
        name="BoardingScreen4"
        component={BoardingScreen4}
        options={{headerShown: false, animationenabled: false}}
      />
      <Stack.Screen
        name="MainRoute"
        component={MainRoute}
        options={{headerShown: false, animationenabled: false}}
      />
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: false, animationenabled: false}}
      />
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{headerShown: false, animationenabled: false}}
      />
      <Stack.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
        options={{headerShown: false, animationenabled: false}}
      />
    </Stack.Navigator>
  );
}
