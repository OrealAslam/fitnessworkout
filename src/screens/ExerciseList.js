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
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('window');
const BANNER_IMG_WIDTH = width;
const BANNER_IMG_RATIO = BANNER_IMG_WIDTH / 1440;

const CARD_WIDTH = width / 2 - 10;
const CARD_RATIO = CARD_WIDTH / 360;

const data = {
  day1: [
    require('../data/day1/workout-15-5.gif'),
    require('../data/day1/workout-50-5.gif'),
    require('../data/day1/workout-87-5.gif'),
    require('../data/day1/workout-110-5.gif'),
    require('../data/day1/workout-131-5.gif'),
    require('../data/day1/workout-275-5.gif'),
    require('../data/day1/workout-443-5.gif'),
    require('../data/day1/workout-444-5.gif'),
  ],
  day2: [
    require('../data/day2/workout-2-5.gif'),
    require('../data/day2/workout-40-5.gif'),
    require('../data/day2/workout-111-5.gif'),
    require('../data/day2/workout-123-5.gif'),
    require('../data/day2/workout-182-5.gif'),
    require('../data/day2/workout-405-5.gif'),
    require('../data/day2/workout-406-5.gif'),
  ],
  day3: [
    require('../data/day3/workout-15-5.gif'),
    require('../data/day3/workout-50-5.gif'),
    require('../data/day3/workout-61-5.gif'),
    require('../data/day3/workout-110-5.gif'),
    require('../data/day3/workout-111-5.gif'),
    require('../data/day3/workout-123-5.gif'),
  ],
  day4: [
    require('../data/day4/workout-2-5.gif'),
    require('../data/day4/workout-110-5.gif'),
    require('../data/day4/workout-111-5.gif'),
    require('../data/day4/workout-275-5.gif'),
  ],
  day5: [
    require('../data/day5/workout-26-5.gif'),
    require('../data/day5/workout-110-5.gif'),
    require('../data/day5/workout-123-5.gif'),
    require('../data/day5/workout-171-5.gif'),
    require('../data/day5/workout-185-5.gif'),
    require('../data/day5/workout-186-5.gif'),
  ],
  day6: [
    require('../data/day6/workout-111-5.gif'),
    require('../data/day6/workout-123-5.gif'),
    require('../data/day6/workout-182-5.gif'),
    require('../data/day6/workout-275-5.gif'),
    require('../data/day6/workout-390-5.gif'),
    require('../data/day6/workout-391-5.gif'),
  ],
  day7: [
    require('../data/day7/workout-15-5.gif'),
    require('../data/day7/workout-110-5.gif'),
    require('../data/day7/workout-123-5.gif'),
    require('../data/day7/workout-131-5.gif'),
    require('../data/day7/workout-282-5.gif'),
    require('../data/day7/workout-405-5.gif'),
    require('../data/day7/workout-406-5.gif'),
  ],
};

const ExerciseList = ({navigation}) => {
  const route = useRoute();
  const [day, setday] = useState(route.params?.day);
  const [resource, setresource] = useState([]);
  const [jsx, setjsx] = useState(<></>);
  const [selectedindex, setselectedindex] = useState(null);

  useEffect(() => {
    switch (day) {
      case 'day1':
        setresource(data.day1);
        break;
      case 'day2':
        setresource(data.day2);
        break;
      case 'day3':
        setresource(data.day3);
        break;
      case 'day4':
        setresource(data.day4);
        break;
      case 'day5':
        setresource(data.day5);
        break;
      case 'day6':
        setresource(data.day6);
        break;
      case 'day7':
        setresource(data.day7);
        break;
      default:
        return;
        break;
    }
  }, [day]);

  useEffect(() => {
    exercise_data(resource);
  }, [resource]);

  const exercise_data = data => {
    if (data.length > 0) {
      let jsx = data.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => setselectedindex(index)}>
            <Image style={styles.card} source={item} />
          </TouchableOpacity>
        );
      });
      setjsx(jsx);
      return jsx;
    } else {
      return <></>;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF3F5'}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (selectedindex != null) {
              setselectedindex(null);
            } else {
              navigation.navigate('StartScreen');
            }
          }}>
          <Image
            style={styles.backbtn}
            source={require('../assets/boarding/back.png')}
          />
        </TouchableOpacity>
      </View>

      {selectedindex != null ? (
        <>
          <View style={styles.gifContainer}>
            <FastImage
              source={resource[selectedindex]}
              style={styles.FastImage}
              resizeMode={FastImage.resizeMode.contain}
            /> 
            <Text style={[styles.heading, {width: width * 0.50, textAlign: 'center', marginVertical: 15, lineHeight: 24}]}>Bulgarian Split Squat Left</Text>
          </View>
        </>
      ) : (
        <>
          <ImageBackground
            style={styles.bannerImg}
            source={require('../assets/images/exercise_banner.png')}>
            <Text style={styles.day}>{day}</Text>
          </ImageBackground>

          <View style={{width: width, padding: 19, flex: 2}}>
            <Text style={styles.heading}>Exercises</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>{jsx}</View>
            </ScrollView>
          </View>
        </>
      )}
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
    height: 724 * BANNER_IMG_RATIO,
    paddingHorizontal: 15,
  },
  day: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3D3234',
    textTransform: 'capitalize',
    position: 'absolute',
    top: '30%',
    left: '6%',
  },
  heading: {
    fontWeight: '900',
    color: '#3D3234',
    fontSize: 17,
    marginBottom: 10,
  },
  container: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: CARD_WIDTH,
    height: 360 * CARD_RATIO,
    marginBottom: 15,
    borderRadius: 10,
  },
  gifContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FastImage: {
    width: width - 20,
    height : 360 * (width - 20)/360,
    alignSelf: 'center',
  }
});
export default ExerciseList;
