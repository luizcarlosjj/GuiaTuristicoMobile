import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
import ListCiclismo from "./subcomponents/ListCiclismo";


export default function Ciclismo() {
 return (
   <View style={styles.container}>
        <View style={styles.conText}>
            <Feather name="map" size={30} color="#fff"/>
            <Text style={styles.Text}>Ciclismo</Text>
        </View>
        <ListCiclismo />
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#02247C',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 22,
    },
    conText:{
        padding: 18,
        flexDirection: 'row',
    },
    Text:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 10
    }
})