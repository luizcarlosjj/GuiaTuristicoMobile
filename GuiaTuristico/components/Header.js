import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64 

export default function Header({ title, desc }){
  return(
    <View style={styles.container}>
      <View style={styles.content}>

        <Image 
          style={styles.LogoApp} 
          source={require('../src/gtg-logos.png')}
        />

        <Text style={styles.frasetop}>{title}</Text>

        <Text style={styles.desctop}>{desc}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#02247C',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
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