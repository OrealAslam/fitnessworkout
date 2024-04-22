import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const btnWidth = width - 40;
const btnRatio = btnWidth / 1312;

const maleWidth = width - 150;
const maleRatio = maleWidth / 1031;

const femaleWidth = width - 150;
const femaleRatio = maleWidth / 1216;

const nextBtnWidth = width - 50;
const nextBtnRatio = nextBtnWidth / 1308;

const progressImgWidth = width - 150;
const progressImgRatio = progressImgWidth / 764;

const dietImgWidth = width - 40;
const dietImgRatio = dietImgWidth / 1312;

const stripeWidth = width - 50;
const stripeRatio = stripeWidth / 1304

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#ff0',
  },
  header: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 0
  },
  heading: {
    color: '#000',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '400',
  },
  optionContainer: {
    width: width,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  optionBtn: {
    marginBottom: 20,
  },
  optionImg: {
    width: btnWidth,
    height: 300 * btnRatio,
  },
});

export const mainContainer = StyleSheet.create({
  contentContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maleImg: {
    width: maleWidth,
    height: 1727 * maleRatio,
  },
  femaleImg: {
    width: femaleWidth,
    height: 2033 * femaleRatio,
  },
  nextBtn: {
    width: nextBtnWidth,
    height: 224 * nextBtnRatio,
  },
  progressContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  progressImage: {
    width: progressImgWidth,
    height: 28 * progressImgRatio,
  },
  skipButton: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000'
  },
  dietBox: {
    marginBottom: 15
  },
  dietImg: {
    width: dietImgWidth,
    height: 548 * dietImgRatio,
  },
  bodyShapeImg: {
    width: 280,
    height: 280
  },
  stripeImg: {
    width: stripeWidth,
    height: 80 * stripeRatio
  },
  stripeSubContainer: {
    width: 90/100 * width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10
  }
});

export const footerContainer = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
