import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Animated } from 'react-native';
import Header from '../components/Header';
import Turismo from '../components/Turismo';
import Ciclismo from '../components/Ciclismo';
import Main from '../components/Main';
import Infos from '../components/Infos';

export default function Home() {
 return (
  <ScrollView style={styles.container}>
    <StatusBar
      barStyle = "light-content"
      hidden = {false}
      backgroundColor = "#003a2b"
      translucent = {true}
      networkActivityIndicatorVisible = {true}
    />
    <Header title={'Guia Turístico de Goiás'} desc={'Aqui iremos te apresentar mais sobre o Estado de Goiás!'} />
    <Main />
    <View style={{flex: 1, height: 2, backgroundColor: "#003a2b", width: '100%'}}></View>
    <Turismo />
    <Ciclismo />
    <Infos />
  </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#d4d4d4',
    },
  });
  