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
import Category from './components/Category';
import SideMenu from './components/SideMenu';
const {width} = Dimensions.get('window');

const BANNER_IMG_WIDTH = width - 35;
const BANNER_IMG_RATIO = BANNER_IMG_WIDTH / 1312;

const START_BTN_WIDTH = width - 230;
const START_BTN_RATIO = START_BTN_WIDTH / 320;

const BANNER_TO_IMG = width - 35;
const BANNER_TO_RATIO = BANNER_TO_IMG / 1312;

const DashboardScreen = ({navigation}: {navigation: any}) => {
  const [menu, setmenu] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#FFF3F5'}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setmenu(!menu)}>
          <Image
            style={styles.backbtn}
            source={require('../../assets/images/menuicon.png')}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            style={styles.bannerImg}
            source={require('../../assets/images/dashboard_banner.png')}>
            <TouchableOpacity onPress={()=>{navigation.navigate('StartScreen')}}>
              <Image
                style={styles.startbtn}
                source={require('../../assets/images/start.png')}
              />
            </TouchableOpacity>
          </ImageBackground>

          <TouchableOpacity onPress={()=>{navigation.navigate('WorkoutScreen')}}>
            <Image
              style={styles.bannertoImg}
              source={require('../../assets/images/dashboard_bannerto.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.catheading}>Body focus</Text>
          <Category navigation={navigation}/>
        </View>

        {menu && (<SideMenu />)}
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
  startbtn: {
    width: START_BTN_WIDTH,
    height: 112 * START_BTN_RATIO,
    bottom: 38,
  },
  bannertoImg: {
    width: BANNER_TO_IMG,
    height: 384 * BANNER_IMG_RATIO,
    alignSelf: 'center',
    marginVertical: 10,
  },
  categoryContainer: {
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  catheading: {
    fontWeight: '800',
    color: '#000',
    fontSize: 17,
  },
});
export default DashboardScreen;
