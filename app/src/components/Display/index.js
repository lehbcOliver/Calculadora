import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';


const Display = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtDisplayOperation} numberOfLines={1}>{props.value}</Text>
            <Text style={styles.txtDisplayResults} numberOfLines={1}>{props.results}</Text>
        </View>
    );
}
export default Display;