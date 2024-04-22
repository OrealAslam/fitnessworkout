import {View, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const btnWidth = width - 60;
const btnRatio = btnWidth / 1280;

const OptionComponent = (props:any) => {
  return (
    <View style={styles.optionContainer}>
      <TouchableOpacity style={styles.optionBtn} onPress={() => props.setoption('weight')}>
        <Image
          style={styles.optionImg}
          source={
            props.option == 'weight'
              ? require('../../../assets/boarding/weight_check.png')
              : require('../../../assets/boarding/weight_uncheck.png')
          }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionBtn} onPress={() => props.setoption('butt')}>
        <Image
          style={styles.optionImg}
          source={
            props.option == 'butt'
            ? require('../../../assets/boarding/butt_check.png')
            : require('../../../assets/boarding/butt_uncheck.png')
          }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionBtn} onPress={() => props.setoption('belly')}>
        <Image
          style={styles.optionImg}
          source={
            props.option == 'belly'
            ? require('../../../assets/boarding/belly_check.png')
            : require('../../../assets/boarding/belly_uncheck.png')
          }
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.optionBtn} onPress={() => props.setoption('mucle')}>
        <Image
          style={styles.optionImg}
          source={
            props.option == 'mucle'
            ? require('../../../assets/boarding/mucle_check.png')
            : require('../../../assets/boarding/mucle_uncheck.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
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
    height: 320 * btnRatio,
  },
});
export default OptionComponent;
