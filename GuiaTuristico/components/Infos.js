import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'
import ListCuriosidades from "./subcomponents/ListCuriosidades";

export default function Infos() {
 return (
   <View style={styles.container}>
        <View style={styles.conText}>
            <Entypo name="info" size={26} color="#003a2b"/>
            <Text style={styles.Text}>Curiosidades </Text>
        </View>
        <Text style={styles.Textp2}>Veja algunas infomações úteis no seu passeio!</Text>
        <ListCuriosidades />
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
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
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