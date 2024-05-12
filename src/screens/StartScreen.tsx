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
import { useIsFocused } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {dayArr} from '../Helper/Helper';
const {width} = Dimensions.get('window');

const BANNER_IMG_WIDTH = width - 35;
const BANNER_IMG_RATIO = BANNER_IMG_WIDTH / 1312;

const OPT_WIDTH = width - 35;
const OPT_RATIO = BANNER_IMG_WIDTH / 1312;

const StartScreen = ({navigation}: {navigation: any}) => {
  const [option, setoption] = useState('');
  const isFocused = useIsFocused();

  useEffect(()=> {
    setoption('');
  },[isFocused]);
  
  useEffect(() => {
    if(option != '') {
      navigation.navigate('ExerciseList', {day: option});
    }
  }, [option]);

  const options = () => {
    let opt = dayArr.map((item, key) => {
      return (
        <TouchableOpacity
          key={key}
          onPress={() => {
            setoption(item);
          }}>
          <ImageBackground
            style={styles.optbtn}
            source={
              option == item
                ? require('../assets/images/selectopt.png')
                : require('../assets/images/unselectopt.png')
            }>
            <Text
              style={[
                styles.opttext,
                option == item ? {color: '#fff'} : {color: '#FFC8D2'},
              ]}>
              {item.slice(0, 3) + ' ' + item.slice(3)}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      );
    });
    return opt;
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF3F5'}}>
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
      <Image
        style={styles.bannerImg}
        source={require('../assets/images/dashboard_banner.png')}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.optionContainer}>{options()}</View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  opttext: {
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: 16,
  },
});
export default StartScreen;