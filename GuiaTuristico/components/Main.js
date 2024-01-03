import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";


export default function Main() {
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
            <Text style={styles.text2}>Descubra os encantos e segredos do nosso incrível Estado. </Text>
            <Text style={styles.text3}>&</Text>
            <Text style={styles.Text4}>Desfrute de experiências únicas ao realizar seus passeios!</Text>

        </View>

        <View style={styles.conDesc}>
            <LottieView 
                source={require('../src/motion/Animation - man.json')}
                autoPlay={true}
                loop={true}
                resizeMode="cover"
                style={{width: 125, height: 125,}}
            />
            <Text style={styles.TextFim}>Agora é só aproveitar{'\n'}Bom passeio!</Text>
            
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
        paddingStart: 0,
        paddingEnd: 0,
        paddingBottom: 32,
        justifyContent: 'center',
    },
    conText:{
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    conDesc:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 60,
        alignItems: 'center',
        paddingTop: 0
    },
    Text:{
        color: '#003a2b',
        fontSize: 24,
        fontWeight: 'bold',

    },
    text2:{
        color: '#003a2b',
        fontSize: 18,
        padding: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 5
    },
    text3:{
        color: '#003a2b',
        fontSize: 18,
        padding: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    },
    Text4:{
        color: '#003a2b',
        fontSize: 18,
        padding: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    },
    TextFim:{
        color: '#003a2b',
        fontSize: 26,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    desc:{
        color: '#000',
        textAlign: 'justify',
        fontSize: 18,
        fontWeight: '500',
        paddingTop: 10
    }
})