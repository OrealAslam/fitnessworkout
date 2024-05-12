import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator color={'red'} size={'large'}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: `rgba(0,0,0,0.3)`,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loader;
