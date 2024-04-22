import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {BottomMenuStyle} from '../styles';

const BottomMenu = (props: any) => {
  return (
    <View style={BottomMenuStyle.container}>
      <TouchableOpacity>
        <Image
          style={BottomMenuStyle.icon}
          source={require('../../../assets/images/btn1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={BottomMenuStyle.icon}
          source={require('../../../assets/images/btn2.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={BottomMenuStyle.icon}
          source={require('../../../assets/images/btn3.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={BottomMenuStyle.icon}
          source={require('../../../assets/images/btn4.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={BottomMenuStyle.icon}
          source={require('../../../assets/images/btn5.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;
