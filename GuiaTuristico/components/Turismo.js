import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from '@expo/vector-icons'

import ListTurismo from "./subcomponents/ListTurismo";

export default function Turismo() {
 return (
   <View style={styles.container}>
        <View style={styles.conText}>
            <Feather name="map" size={30} color="#02247C"/>
            <Text style={styles.Text}>Turismo</Text>
        </View>
        <ListTurismo />
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#fff',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 42,
    },
    conText:{
        padding: 18,
        flexDirection: 'row',
    },
    Text:{
        color: '#02247C',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 10
    }
})