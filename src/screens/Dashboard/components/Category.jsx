import { View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
const { width } = Dimensions.get('window');

const CARD_WIDTH = width / 2 - 30;
const CARD_RATIO = CARD_WIDTH / 628;
const Category = () => {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity>
                <Image style={styles.card} source={require('../../../assets/images/fullbody.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.card} source={require('../../../assets/images/butt&leg.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image style={styles.card} source={require('../../../assets/images/flatstretch.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.card} source={require('../../../assets/images/arms.png')} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        width: width * 0.89,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignSelf: 'center'
    },
    card: {
        width: CARD_WIDTH,
        height: 628 * CARD_RATIO,
        marginVertical: 10,
    }
})
export default Category;