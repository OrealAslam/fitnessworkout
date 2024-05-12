import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import Category from './Dashboard/components/Category';
const {width} = Dimensions.get('window');
const BANNER_IMG_WIDTH = width - 35;
const BANNER_IMG_RATIO = BANNER_IMG_WIDTH / 1312;

const WorkoutScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
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
      <ScrollView>
        <View style={styles.head}>
            <Text style={[styles.text, {fontWeight: '800', fontSize: 21}]}>
            Fast workout
            </Text>
            <Text
            style={[
                styles.text,
                {fontWeight: '400', fontSize: 14, color: '#A6898E'},
            ]}>
            Not enough time?
            </Text>
            <Text
            style={[
                styles.text,
                {fontWeight: '400', fontSize: 14, color: '#A6898E'},
            ]}>
            5-7 minutes workout to do anytime...
            </Text>
        </View>

        <Image
            style={styles.bannerImg}
            source={require('../assets/images/burningfat.png')}
        />
        <View style={styles.categoryContainer}>
            <Text style={styles.catheading}>Random workout</Text>
            <Category navigation={navigation}/>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: width,
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  btn: {
    padding: 10,
  },
  backbtn: {
    width: 24,
    height: 24,
  },
  head: {
    width: width * 0.95,
    alignSelf: 'center',
    paddingHorizontal: 13,
    paddingVertical: 15,
    marginBottom: 20,
  },
  text: {
    color: '#000',
  },
  bannerImg: {
    width: BANNER_IMG_WIDTH,
    height: 480 * BANNER_IMG_RATIO,
    alignSelf: 'center',
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
export default WorkoutScreen;
