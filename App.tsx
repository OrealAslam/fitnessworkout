import { View, Text } from 'react-native';
import React from 'react';
import BoardingScreen1 from './src/screens/BoardingScreens/BoardingScreen1';
import Route from './src/Routes/Route';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  )
}

export default App;