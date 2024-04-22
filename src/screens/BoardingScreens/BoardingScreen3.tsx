import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import React, {useState} from 'react';
import WheelPicker from 'react-native-wheely';
const { width } = Dimensions.get('window');

const BG_IMG_IDTH = width;
const BG_IMG_RATIO = BG_IMG_IDTH / 1440;

const BTN_WIDTH = width - 40;
const BTN_RATIO = BTN_WIDTH / 1280;

const BoardingScreen3 = ({ navigation }: { navigation: any }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [unit, setunit] = useState(['kg', 'lbs']);
  const [weight, setweight] = useState(["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180"]);
  return (
    <ImageBackground style={styles.bg} source={require('../../assets/boarding/boarding3bg.png')}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BoardingScreen2')}>
          <Image style={styles.backbtn} source={require('../../assets/boarding/back.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BoardingScreen4')}>
          <Text style={styles.btnText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <View>
          <Text style={styles.highlightText}>What's your</Text>
          <Text style={styles.highlightText}>Target Weight?</Text>
        </View>

        <Text style={styles.decText}>Let us know you better to help you boost your work result</Text>
      </View>

      <View style={styles.pickerContainer}>
        <WheelPicker
          selectedIndex={40}
          options={weight}
          onChange={(index) => setSelectedIndex(index)}
          itemHeight={60}
          itemTextStyle={{ fontSize: 24, fontWeight: '700', color: 'rgb(255, 122,138)' }}
          visibleRest={3}
          selectedIndicatorStyle={{ backgroundColor: 'transparent' }}
        />

        <WheelPicker
          selectedIndex={0}
          options={unit}
          onChange={(index) => setSelectedIndex(index)}
          itemHeight={60}
          itemTextStyle={{ fontSize: 24, fontWeight: '700', color: 'rgb(255, 122,138)' }}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('BoardingScreen4')}>
        <Image style={styles.nextbtn} source={require('../../assets/boarding/nextbtn.png')} />
      </TouchableOpacity>
    </ImageBackground>
  );
};
export const styles = StyleSheet.create({
  bg: {
    width: BG_IMG_IDTH,
    height: 3200 * BG_IMG_RATIO,
  },
  header: {
    width: width,
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  backbtn: {
    width: 24,
    height: 24,
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
    width: width * 0.88,
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
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 25,
    color: '#000',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: width * 0.65,
    backgroundColor: 'transparent',
  },
  nextbtn: {
    width: BTN_WIDTH,
    height: 200 * BTN_RATIO,
    alignSelf: 'center'
  }
});
export default BoardingScreen3;
