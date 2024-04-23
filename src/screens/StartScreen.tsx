import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
const {width} = Dimensions.get('window');
const BANNER_IMG_WIDTH = width - 35;
const BANNER_IMG_RATIO = BANNER_IMG_WIDTH / 1312;

const OPT_WIDTH = width - 35;
const OPT_RATIO = BANNER_IMG_WIDTH / 1312;

const StartScreen = ({navigation}: {navigation: any}) => {
  const [option, setoption] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('DashboardScreen');
          }}>
          <Image
            style={styles.backbtn}
            source={require('../assets/boarding/back.png')}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.bannerImg}
          source={require('../assets/images/dashboard_banner.png')}
        />

        <View style={styles.optionContainer}>
          <TouchableOpacity
            onPress={() => {
              setoption('day1');
            }}>
            <ImageBackground
              style={styles.optbtn}
              source={
                option == 'day1'
                  ? require('../assets/images/selectopt.png')
                  : require('../assets/images/unselectopt.png')
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setoption('day2');
            }}>
            <ImageBackground
              style={styles.optbtn}
              source={
                option == 'day2'
                  ? require('../assets/images/selectopt.png')
                  : require('../assets/images/unselectopt.png')
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setoption('day3');
            }}>
            <ImageBackground
              style={styles.optbtn}
              source={
                option == 'day3'
                  ? require('../assets/images/selectopt.png')
                  : require('../assets/images/unselectopt.png')
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setoption('day4');
            }}>
            <ImageBackground
              style={styles.optbtn}
              source={
                option == 'day4'
                  ? require('../assets/images/selectopt.png')
                  : require('../assets/images/unselectopt.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backbtn: {
    width: 24,
    height: 24,
  },
  btn: {
    padding: 10,
  },
  bannerImg: {
    width: BANNER_IMG_WIDTH,
    height: 1000 * BANNER_IMG_RATIO,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  optionContainer: {
    width: width,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  optbtn: {
    width: OPT_WIDTH,
    height: 200 * OPT_RATIO,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
export default StartScreen;
