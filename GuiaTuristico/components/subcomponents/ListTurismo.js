import React from 'react';
import {  StyleSheet,  Image,  View,  Text,  TouchableOpacity,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

export default function ListTurismo() {
 return (
   <View style={styles.container}>
    <TouchableOpacity style={styles.card1}>
      <View style={styles.conView}>
        <MaterialIcons name="attractions" size={45} color="#02247C"/>
        <Text style={styles.textP1}>Pontos Turisticos</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card1}>
      <View style={styles.conView}>
        <FontAwesome5 name="route" size={45} color="#02247C"/>
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