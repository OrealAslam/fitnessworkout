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
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {URL} from '../Helper/Helper';
import {data} from '../assets/data';
import FastImage from 'react-native-fast-image';
const {width} = Dimensions.get('window');
const BANNER_IMG_WIDTH = width;
const BANNER_IMG_RATIO = BANNER_IMG_WIDTH / 1440;

const CARD_WIDTH = width / 2 - 10;
const CARD_RATIO = CARD_WIDTH / 360;

const CategoryScreen = ({navigation}: {navigation: any}) => {
  const route = useRoute();
  const [type, settype] = useState(route.params?.type);
  const [cards, setcards] = useState(<></>);
  const [selectedindex, setselectedindex] = useState(null);
  const [bannerimg, setbannerimg] = useState(
    require('../assets/images/buttleg_banner.png'),
  );

  useEffect(() => {
    (async () => {
      try {
        banner();
        let exercises = data[type];
        let card = exercises.map((item: any, index: any) => {
          return (
            <TouchableOpacity
              style={styles.card}
              key={index}
              onPress={() => setselectedindex(item)}>
              <View style={styles.cardcol1}>
                <Image
                  style={styles.cardImage}
                  source={{
                    uri: `${URL + type + '/' + item.source}`,
                    cache: 'force-cache'
                  }}
                />
              </View>

              <View style={styles.cardcol2}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.time}>{item.duration}</Text>
              </View>
            </TouchableOpacity>
          );
        });
        setcards(card);
      } catch (e: any) {
        console.log(e);
      }
    })();
  }, []);

  const banner = () => {
    switch (type) {
      case 'fullbody':
        setbannerimg(require('../assets/images/fullbody_banner.png'));
        break;

      case 'buttleg':
        setbannerimg(require('../assets/images/buttleg_banner.png'));
        break;
      case 'arms':
        setbannerimg(require('../assets/images/arms_banner.png'));
        break;
      case 'flatstretch':
        setbannerimg(require('../assets/images/flatstretch_banner.png'));
        break;

      default:
        setbannerimg(require('../assets/images/fullbody_banner.png'));
        break;
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
              navigation.navigate('DashboardScreen');
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
              source={{uri: URL + type + '/' + selectedindex?.source}}
              style={styles.FastImage}
              // priority={FastImage.priority.normal}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text
              style={[
                styles.heading,
                {
                  width: width * 0.5,
                  textAlign: 'center',
                  marginVertical: 15,
                  lineHeight: 24,
                },
              ]}>
              {selectedindex.title}
            </Text>
            <Text
              style={[
                styles.heading,
                {
                  width: width * 0.5,
                  textAlign: 'center',
                  marginVertical: 15,
                  lineHeight: 24,
                },
              ]}>
              {selectedindex.duration}
            </Text>
          </View>
        </>
      ) : (
        <>
          <Image style={styles.bannerImg} source={bannerimg} />

          <View style={{width: width, padding: 19, flex: 2}}>
            <Text style={styles.heading}>Exercises</Text>
            <ScrollView style={{width: width}}>
              <View style={styles.container}>{cards}</View>
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
    flexDirection: 'column',
  },
  card: {
    width: width,
    marginBottom: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  cardImage: {
    width: '100%',
    height: 70,
    resizeMode: 'contain',
  },
  cardcol1: {
    width: '38%',
  },
  cardcol2: {
    width: '52%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  time: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#FF66F0',
  },
  gifContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FastImage: {
    width: width - 20,
    height: (360 * (width - 20)) / 360,
    alignSelf: 'center',
  },
});
export default CategoryScreen;
