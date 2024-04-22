import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const bannerImageWidth = width - 30;
const bannerImageRatio = bannerImageWidth / 1312;

export const HeaderStyle = StyleSheet.create({
  container: {
    width: width,
    padding: 15,
    flexDirection: 'row',
  },
  heading: {
    color: '#121212',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    marginLeft: 20,
  },
});
export const MainContent = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  bannerImage: {
    width: width - 30,
    height: 696 * bannerImageRatio,
    alignSelf: 'center',
  },
  workoutContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  workoutCard: {
    width: (29 / 100) * width,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C3842',
    borderRadius: 13,
  },
  icon: {
    width: 30,
    height: 30,
    marginVertical: 5
  },
  count: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
  },
  subTitle: {
    color: '#818181',
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
});
export const BottomMenuStyle = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
