import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import { set_async_data } from '../../Helper/Helper';
const { width, height } = Dimensions.get('window');
const DESC_IMG = width - 80;
const DESC_IMG_RATIO = DESC_IMG / 912;

const BTN_WIDTH = width - 40;
const BTN_RATIO = BTN_WIDTH / 1280;

const CHART = width - 140;
const CHART_RATIO = CHART / 672;

const BoardingScreen4 = ({ navigation }: { navigation: any }) => {

  const navigatetodashboard = async () => {
    await set_async_data('token', 'onboard');
    navigation.navigate('MainRoute');
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BoardingScreen3')}>
          <Image style={styles.backbtn} source={require('../../assets/boarding/back.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <Image style={styles.dec} source={require('../../assets/boarding/content.png')} />
        <Image style={styles.bmi} source={require('../../assets/boarding/bmi_chart.png')} />
        
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.bmiText}>25.6 BMI</Text>
          <Text style={styles.bmiDesc}>Current BMI - Overweight</Text>
        </View>
      </View>

      <TouchableOpacity onPress={navigatetodashboard}>
        <Image style={styles.nextbtn} source={require('../../assets/boarding/nextbtn.png')} />
      </TouchableOpacity>
    </View>
  );
};
export const styles = StyleSheet.create({
  header: {
    width: width,
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  backbtn: {
    width: 24,
    height: 24,
  },
  btn: {
    padding: 10,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  mainContent: {
    width: width,
    height: height * 0.80,
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dec: {
    width: DESC_IMG,
    height: 320 * DESC_IMG_RATIO,
    alignSelf: 'center',
  },
  bmi: {
    width: CHART,
    height: 636 * CHART_RATIO,
    alignSelf: 'center',
  },
  bmiText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 25,
    lineHeight: 28,
  },
  bmiDesc: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 28,
    color: '#000'
  },
  nextbtn: {
    width: BTN_WIDTH,
    height: 200 * BTN_RATIO,
    alignSelf: 'center'
  }
});
export default BoardingScreen4;
