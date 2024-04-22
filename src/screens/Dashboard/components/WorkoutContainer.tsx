import {View, Text, Image} from 'react-native';
import React from 'react';
import {MainContent} from '../styles';

const WorkoutContainer = (props: any) => {
  return (
    <View style={MainContent.workoutContainer}>
      <View style={MainContent.workoutCard}>
        <Image
          style={MainContent.icon}
          source={require('../../../assets/images/stepicon.png')}
        />
        <Text style={MainContent.count}>64545</Text>
        <Text style={MainContent.subTitle}>Steps</Text>
      </View>
      <View style={MainContent.workoutCard}>
        <Image
          style={MainContent.icon}
          source={require('../../../assets/images/burnicon.png')}
        />
        <Text style={MainContent.count}>64545</Text>
        <Text style={MainContent.subTitle}>Cal burn</Text>
      </View>
      <View style={MainContent.workoutCard}>
        <Image
          style={MainContent.icon}
          source={require('../../../assets/images/heartbeaticon.png')}
        />
        <Text style={MainContent.count}>64545</Text>
        <Text style={MainContent.subTitle}>Steps</Text>
      </View>
    </View>
  );
};

export default WorkoutContainer;
