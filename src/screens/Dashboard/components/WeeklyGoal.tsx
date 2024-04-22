import { View, Text } from 'react-native';
import React from 'react';
import { MainContent } from '../styles';

const WeeklyGoal = (props:any) => {
  return (
    <View style={MainContent.container}>
      <Text style={{textAlign: 'left'}}>WeeklyGoal</Text>
    </View>
  )
}

export default WeeklyGoal;