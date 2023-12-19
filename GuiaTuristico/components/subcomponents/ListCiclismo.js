import React from 'react';
import {  StyleSheet,  Image,  View,  Text,  TouchableOpacity,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ListCiclismo() {
 return (
   <View style={styles.container}>
    <TouchableOpacity style={styles.card1}>
      <View style={styles.conView}>
        <MaterialIcons name="attractions" size={40} color="#02247C"/>
        <Text style={styles.textP1}>Pontos Turisticos</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card1}>
      <View style={styles.conView}>
        <MaterialCommunityIcons name="bike" size={40} color="#02247C"/>
        <Text style={styles.textP1}>Trilhas</Text>
      </View>
    </TouchableOpacity>
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10
    },
    card1:{
      width: 120,
      height: 120,
      borderRadius: 10,
      backgroundColor: '#d2d2d2',
      borderWidth: 2,
      borderColor: '#000',
    },
    conView:{
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textP1:{
      color: '#02247C',
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: 10,
    }
    
})