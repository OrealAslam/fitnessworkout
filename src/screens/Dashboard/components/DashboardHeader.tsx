import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { HeaderStyle } from '../styles';

const DashboardHeader = (props:any) => {
  return (
    <View style={HeaderStyle.container}>
      <TouchableOpacity>
        <Image style={{width: 30,height:30}} source={require('../../../assets/images/menu-icon.png')}/>
      </TouchableOpacity>

      <Text style={HeaderStyle.heading}>Women Workout</Text>
    </View>
  )
}

export default DashboardHeader;