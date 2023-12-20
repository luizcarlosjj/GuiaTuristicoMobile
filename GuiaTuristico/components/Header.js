import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import LottieView from 'lottie-react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64 

function teste(){
  <LottieView 
    source={require('../src/motion/Animation - 1703020656286.json')}
    autoPlay={false}
    loop={false}
    style={{width: 100, height: 100}}
    resizeMode="cover"
  />
}

export default function Header({ title, desc }){
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <Image style={styles.LogoApp} source={require('../src/gtg-logos.png')} />
        </TouchableOpacity>
        <Text style={styles.frasetop}>{title} </Text>

        <Text style={styles.desctop}>{desc}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 0,
    height: 270,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#003a2b',
    paddingTop: statusBarHeight,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 22
  },
  content:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  frasetop:{
    fontSize: 26,
    paddingTop: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  desctop:{
    fontSize: 16,
    paddingTop: 5,
    color: '#fff',
    fontWeight: 'bold'
  },
  LogoApp:{
    width: 150,
    height: 150,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2
  }
})