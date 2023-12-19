import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Turismo from '../components/Turismo';
import Ciclismo from '../components/Ciclismo';

export default function Home() {
 return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header 
        title={'Seja Bem vindo ao nosso App!'}
        desc={'Aqui iremos te apresentar mais sobre o Estado de Goiás!'}
      />

      <Turismo />

      <Ciclismo />


    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#d4d4d4',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  