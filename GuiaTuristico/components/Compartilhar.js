import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";


export default function Compartilhar() {
 return (
   <View style={styles.container}>
        <View style={styles.conText}>
            <LottieView 
                source={require('../src/motion/Animation - 1703037976920.json')}
                autoPlay={true}
                loop={true}
                resizeMode="cover"
                style={{width: 100, height: 100,}}
            />
            <Text style={styles.Text}>Olá! </Text>
            <Text style={styles.Text}>Seja bem vindo ao Guia Turístico de Goiás! </Text>
            <Text style={styles.desc}>Descubra os encantos e segredos do nosso incrível Estado. Seja bem-vindo ao Guia Turístico de Goiás, onde a história se mistura com a modernidade, criando uma experiência única para os usuários ao realizarem um passeio eficiente e bem aproveitado!.</Text>

        </View>

        <View style={styles.conDesc}>
            <LottieView 
                source={require('../src/motion/Animation - man.json')}
                autoPlay={true}
                loop={true}
                resizeMode="cover"
                style={{width: 125, height: 125,}}
            />
            <Text style={styles.Text}>Agora é só aproveitar, Bom passeio!</Text>
        </View>

   </View>
  );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#fff',
        textAlign: 'center',
        margin: 'auto',
        paddingStart: 8,
        paddingEnd: 8,
        paddingBottom: 42,
        justifyContent: 'center',
        flex: 0
    },
    conText:{
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    conDesc:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        alignItems: 'center',
        paddingTop: 20
    },
    Text:{
        color: '#003a2b',
        fontSize: 28,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    desc:{
        color: '#000',
        alignContent: 'stretch',
        textAlign: 'justify',
        fontSize: 18,
        fontWeight: '500',
        paddingTop: 10
    }
})