//borderWidth: 2, // Borde blanco delgado

import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Caja3 = () => {
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
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    boxmo: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 2,
        borderColor: 'white',
        position: 'absolute',
        top: '20%', 
        right:50 ,
        
    },
    boxamari: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderWidth: 4,
        borderColor: 'white',
        position: 'absolute',
        top: '40%', 
        left: 0, 
    },
    boxazul: {
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
        borderWidth: 2,
        borderColor: 'white',
        position: 'absolute',
        top: '60%', 
        left: '50%', 
        marginLeft: -50, 
    }
});

export default Caja3;