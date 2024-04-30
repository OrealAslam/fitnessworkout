import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Route from './src/Routes/Route';
import {NavigationContainer} from '@react-navigation/native';
import { get_async_data } from './src/Helper/Helper';
import MainRoute from './src/Routes/MainRoute';
// import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [onboard, setonboard] = useState(null);
  // const [splashClosed, setsplashClosed] = useState(false);
  useEffect(() => {
    (async () => {
      let token = await get_async_data('token');
      setonboard(token);
      // setTimeout(() => {
      //   SplashScreen.hide();
      // }, 3000);
    })();
  }, []);

  return (
    <NavigationContainer>
      {onboard != null ? (<MainRoute />) : (<Route />)}
    </NavigationContainer>
  );
};

export default App;
