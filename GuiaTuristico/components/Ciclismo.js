import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import ListCiclismo from "./subcomponents/ListCiclismo";


export default function Ciclismo() {
 return (
   <View style={styles.container}>
        <View style={styles.conText}>
            <MaterialIcons name="directions-bike" size={26} color="#fff"/>
            <Text style={styles.Text}>Ciclismo</Text>
        </View>
        <Text style={styles.Textp2}>Quer programar aquele Pedal em Goiânia ? Vem com "Nóis"</Text>
        <ListCiclismo />
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#003a2b',
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
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    Textp2:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '400',
        padding: 14
    }
})