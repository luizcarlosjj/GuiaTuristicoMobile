import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Animated } from 'react-native';
import Header from '../components/Header';
import Turismo from '../components/Turismo';
import Ciclismo from '../components/Ciclismo';
import Compartilhar from '../components/Compartilhar';

export default function Home() {
 return (
  <ScrollView style={styles.container}>
    <StatusBar style="auto" />
    <Header title={'Guia Turístico de Goiás'} desc={'Aqui iremos te apresentar mais sobre o Estado de Goiás!'} />
    <Compartilhar />
    <Turismo />
    <Ciclismo />
  </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#d4d4d4',
    },
  });
  