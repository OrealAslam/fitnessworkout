import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import StartScreen from '../screens/StartScreen';
import ExerciseList from '../screens/ExerciseList';
import WorkoutScreen from '../screens/WorkoutScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Stack = createNativeStackNavigator();

export default function MainRoute() {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{headerShown: false, animationenabled: false}}
      /><Stack.Screen
        name="ExerciseList"
        component={ExerciseList}
        options={{headerShown: false, animationenabled: false}}
      />
    </Stack.Navigator>
  );
}
