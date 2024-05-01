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
    require('../data/day1/jumping-jacks.gif'),
    require('../data/day1/squats.gif'),
    require('../data/day1/circles-arm.gif'),
    require('../data/day1/cat-cow-pose.gif'),
    require('../data/day1/butt-bridge.gif'),
    require('../data/day1/side-step-jacks.gif'),
    require('../data/day1/donkey-kicks-right.gif'),
    require('../data/day1/donkey-kicks-left.gif'),
  ],
  day2: [
    require('../data/day2/punches.gif'),
    // require('../data/day2/workout-40-5.gif'),
    require('../data/day2/cobras.gif'),
    require('../data/day2/plank-leg-up.gif'),
    require('../data/day2/standing-bicycle-crunches.gif'),
    require('../data/day2/bulgarian-split-squat-left.gif'),
    require('../data/day2/bulgarian-split-squat.gif'),
  ],
  day3: [
    require('../data/day3/jumping-jacks.gif'),
    require('../data/day3/squats.gif'),
    require('../data/day3/bicycle-crunches.gif'),
    require('../data/day3/cat-cow-pose.gif'),
    require('../data/day3/cobras.gif'),
    require('../data/day3/plank-leg-up.gif'),
  ],
  day4: [
    require('../data/day4/punches.gif'),
    require('../data/day4/cat-cow-pose.gif'),
    require('../data/day4/cobras.gif'),
    require('../data/day4/side-step-jacks.gif'),
  ],
  day5: [
    require('../data/day5/reverse-crunches.gif'),
    require('../data/day5/cat-cow-pose.gif'),
    require('../data/day5/plank-leg-up.gif'),
    require('../data/day5/box-push-ups.gif'),
    require('../data/day5/standing-side-crunch-elbow-left.gif'),
    require('../data/day5/standing-side-crunch-elbow-right.gif'),
  ],
  day6: [
    require('../data/day6/cobras.gif'),
    require('../data/day6/plank-leg-up.gif'),
    require('../data/day6/standing-bicycle-crunches.gif'),
    require('../data/day6/side-step-jacks.gif'),
    require('../data/day6/side-lying-lift-left.gif'),
    require('../data/day6/side-lying-lift-right.gif'),
  ],
  day7: [
    require('../data/day7/jumping-jacks.gif'),
    require('../data/day7/cat-cow-pose.gif'),
    require('../data/day7/plank-leg-up.gif'),
    require('../data/day7/butt-bridge.gif'),
    require('../data/day7/fire-hydrant-left.gif'),
    require('../data/day7/bulgarian-split-squat-left.gif'),
    require('../data/day7/bulgarian-split-squat.gif'),
    require('../data/day7/fire-hydrant-right.gif'),
  ],
  day8: [
    require('../data/day8/side-step-jacks.gif'),
    require('../data/day8/punches.gif'),
    require('../data/day8/cat-cow-pose.gif'),
    require('../data/day8/cobras.gif'),
  ],
  day9: [
    require('../data/day9/jumping-jacks.gif'),
    require('../data/day9/standing-bicycle-crunches.gif'),
    require('../data/day9/punches.gif'),
    require('../data/day9/plank-leg-up.gif'),
    require('../data/day9/bicycle-crunches.gif'),
    require('../data/day9/box-push-ups.gif'),
    require('../data/day9/cobras.gif'),
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
