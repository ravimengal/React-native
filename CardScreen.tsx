/* eslint-disable */

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CardScreen() {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>
                Red
            </Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>
                Red
            </Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>
                Red
            </Text>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row'
    },
    card:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height:100,
        margin:8,
        borderRadius:8
    },
    cardOne:{
        backgroundColor:'orange'
    },
    cardTwo:{
        backgroundColor:'green'
    },
    cardThree:{
        backgroundColor:'blue'
    }
})