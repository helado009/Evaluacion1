import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Caja1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxmo}></View>
            <View style={styles.boxamari}></View>
            <View style={styles.boxazul}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', 
    },
    boxmo: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 2, 
        borderColor: 'white',
        position: 'absolute',
        top: 20,
        right: 20, 
    },
    boxamari: {
        width: 100,
        height: 300, 
        backgroundColor: 'yellow',
        borderWidth: 2, 
        borderColor: 'white',
        position: 'absolute',
        top: 140, 
        right: 20, 
    },
    boxazul: {
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
        borderWidth: 2, 
        borderColor: 'white',
        position: 'absolute',
        top: 460, 
        right: 20, 
    }
});

export default Caja1;