//borderWidth: 2, // Borde blanco delgado

import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Caja2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxmo}></View>
            <View style={styles.boxama}></View>
            <View style={styles.boxazul}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', 
    },
    boxmo: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 4, 
        borderColor: 'white',
        position: 'relative',
        top: 50, 
        left: 20, 
    },
    boxama: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderWidth: 4, 
        borderColor: 'white',
        position: 'absolute',
        top: 180, 
        left: 20, 
    },
    boxazul: {
        width: 150, 
        height: 80, 
        backgroundColor: 'blue',
        borderWidth: 4,
        borderColor: 'white',
        position: 'absolute',
        top: 300, 
        left: 20, 
    },
});

export default Caja2;