import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import ListTurismo from "./subcomponents/ListTurismo";

export default function Turismo() {
 return (
   <View style={styles.container}>
        <View style={styles.conText}>
            <Feather name="map" size={26} color="#003a2b"/>
            <Text style={styles.Text}>Turismo </Text>
        </View>
        <Text style={styles.Textp2}>Acompanhe o Guia do que fazer em Goias !</Text>
        <ListTurismo />
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#fff',
        paddingStart: 8,
        paddingEnd: 8,
        paddingBottom: 42,
    },
    conText:{
        paddingTop: 14,
        paddingLeft: 14,
        flexDirection: 'row',
    },
    Text:{
        color: '#003a2b',
        fontSize: 28,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    Textp2:{
        color: '#000',
        fontSize: 18,
        fontWeight: '500',
        padding: 14
    }
})