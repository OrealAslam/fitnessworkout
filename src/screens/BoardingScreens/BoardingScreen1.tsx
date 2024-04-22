import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import OptionComponent from './components/OptionComponent';

const { width } = Dimensions.get('window');
const btnWidth = width - 100;
const btnRatio = btnWidth / 1052;

const BoardingScreen1 = ({ navigation }: { navigation: any }) => {
  const [option, setoption] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('BoardingScreen2')}>
          <Text style={styles.btnText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <View>
          <Text style={styles.highlightText}>Choose</Text>     
          <Text style={styles.highlightText}>Your Plan</Text> 
        </View>

        <Text style={styles.decText}>Loose weight with the plan that suits you best</Text> 
      </View>

      
      <View style={styles.optionContainer}>
        <OptionComponent setoption={setoption} option={option} />
      </View>

    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
  },
  header: {
    width: width,
    height: '8%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10
  },
  btn: {
    padding: 10,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  mainContent: {
    width: width * 0.78,
    height: '20%',
    paddingHorizontal: 18,
    justifyContent: 'space-between',
  },
  highlightText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'rgb(255, 122,138)'
  },
  decText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  optionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default BoardingScreen1;
