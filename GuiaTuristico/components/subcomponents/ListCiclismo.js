import React from 'react';
import {  StyleSheet,  ScrollView,  View,  Text,  TouchableOpacity,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListCiclismo() {
 return (
   <View style={styles.container}>
    <ScrollView style={styles.lateralView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>

      <TouchableOpacity style={styles.card1}>
        <View style={styles.conView}>
          <MaterialIcons name="attractions" size={40} color="#000"/>
          <Text style={styles.textP1}>Locais</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card1}>
        <View style={styles.conView}>
          <MaterialCommunityIcons name="bike" size={40} color="#000"/>
          <Text style={styles.textP1}>Rotas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card1}>
        <View style={styles.conView}>
          <MaterialIcons name="supervised-user-circle" size={40} color="#000"/>
          <Text style={styles.textP1}>Grupos</Text>
        </View>
      </TouchableOpacity>
      
    </ScrollView>
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      padding: 0
    },
    lateralView:{
      flexDirection: 'row',
    },
    card1:{
      width: 105,
      height: 105,
      borderRadius: 10,
      backgroundColor: '#d2d2d2',
      borderWidth: 2,
      borderColor: '#000',
      marginLeft: 15
    },
    conView:{
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textP1:{
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: 10,
    }
    
})