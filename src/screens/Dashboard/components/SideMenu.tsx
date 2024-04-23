import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');
const img_width = width - 180;
const img_ratio = img_width/728;

const SideMenu = () => {
  return (
    <View style={style.container}>
      <Image style={style.img} source={require('../../../assets/images/menu_header.png')}/>

      <View style={style.optcontainer}>
        <TouchableOpacity style={style.menubtn}>
          <View style={style.col}>
            <Image style={{width: 24, height: 24}} source={require('../../../assets/menu/lang.png')}/>
          </View>
          <View style={[style.col, {width: '80%'}]}>
            <Text style={style.opttet}>Language</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.menubtn}>
          <View style={style.col}>
            <Image style={{width: 24, height: 24}} source={require('../../../assets/menu/subscription.png')}/>
          </View>
          <View style={[style.col, {width: '80%'}]}>
            <Text style={style.opttet}>Manage subscription</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.menubtn}>
          <View style={style.col}>
            <Image style={{width: 24, height: 24}} source={require('../../../assets/menu/term.png')}/>
          </View>
          <View style={[style.col, {width: '80%'}]}>
            <Text style={style.opttet}>Terms of Use</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.menubtn}>
          <View style={style.col}>
            <Image style={{width: 24, height: 24}} source={require('../../../assets/menu/privacy.png')}/>
          </View>
          <View style={[style.col, {width: '80%'}]}>
            <Text style={style.opttet}>Privacy policy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.menubtn}>
          <View style={style.col}>
            <Image style={{width: 24, height: 24}} source={require('../../../assets/menu/report.png')}/>
          </View>
          <View style={[style.col, {width: '80%'}]}>
            <Text style={style.opttet}>Content report</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.menubtn}>
          <View style={style.col}>
            <Image style={{width: 24, height: 24}} source={require('../../../assets/menu/contact.png')}/>
          </View>
          <View style={[style.col, {width: '80%'}]}>
            <Text style={style.opttet}>Contact</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#fff',
    width: width * 0.83,
  },
  img: {
    width: img_width,
    height: 240 * img_ratio,
    marginLeft: 20,
  },
  optcontainer: {
    width: '100%',
    marginTop: '13%',
    padding: 5,
  },
  menubtn: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 24,
  },
  col: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  opttet: {
    color: '#A6898E',
    fontSize: 18,
    alignSelf: 'flex-start'
  }
});
export default SideMenu;
