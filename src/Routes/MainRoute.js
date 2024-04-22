import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function MainRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: false, animationenabled: false}}
      />
    </Stack.Navigator>
  );
}
