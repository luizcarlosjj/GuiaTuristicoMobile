import React, {useState} from 'react';
import {  StyleSheet, 
  ScrollView, 
  View, 
  Text,
  TouchableOpacity, 
  Image,
  Modal,
  Alert,
  Pressable
} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import {FontAwesome5} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'

export default function ListCuriosidades() {
 const [modalVisible1, setModalVisible1] = useState(false);    {/* MODAL GOIÁS */}
 const [modalVisible2, setModalVisible2] = useState(false);    {/* MODAL BRASILIA */}

 return (
   <View style={styles.container}>
    <ScrollView style={styles.lateralView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>

      {/* MODAL GOIÁS */}
      <Modal 
        animationType='slide'
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("teste!")
          setModalVisible1(!modalVisible1)
        }}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FontAwesome5 name="monument" size={26} color="#003a2b"/>
            <Text style={styles.modalText}>Cidade de Goiás, Patrimônio Mundial: A cidade de Goiás, antiga capital do estado, é reconhecida como Patrimônio Mundial pela UNESCO. Suas ruas de pedra preservadas e arquitetura colonial encantadora transportam os visitantes de volta ao período do Ciclo do Ouro no Brasil.
            </Text>
            <MaterialIcons name="landscape" size={26} color="#003a2b"/>
            <Text style={styles.modalText}>O maior complexo de cavernas da América Latina: O Parque Estadual da Terra Ronca, em São Domingos, abriga o maior complexo de cavernas da América Latina. Com mais de 200 cavernas exploradas, o local é um paraíso para espeleólogos e amantes da natureza.
            </Text>
            <MaterialCommunityIcons name="nature" size={26} color="#003a2b"/>
            <Text style={styles.modalText}>
                Capital Mais Arborizada do Brasil: Goiânia, capital de Goiás, é a cidade mais arborizada do Brasil. Além disso, também é considerada a capital com mais praças do país.
            </Text>
            <MaterialCommunityIcons name="diamond-stone" size={26} color="#003a2b"/>
            <Text style={styles.modalText}>
              Cidade de Pedra: No município de Pirenópolis, é possível encontrar uma formação rochosa conhecida como Cidade de Pedra. O local oferece paisagens incríveis, com formações rochosas que se assemelham a ruas e construções, proporcionando um cenário único.
            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        
      {/* MODAL BRASILIA */}
      <Modal 
        animationType='slide'
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("teste!")
          setModalVisible2(!modalVisible2)
        }}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MaterialCommunityIcons name="google-earth" size={26} color="#003a2b"/>
            <Text style={styles.modalText}>Única cidade moderna a receber reconhecimento como patrimônio mundial pela UNESCO. A UNESCO reconheceu Brasília como um exemplo notável de planejamento urbano e arquitetura moderna, que representam uma ruptura radical com as formas urbanas tradicionais.
            </Text>
            <AntDesign name="picture" size={26} color="#003a2b"/>
            <Text style={styles.modalText}>Espalhada por toda Brasilia, a cultura é vista predominantemente nas suas exclusivas obras arquitetônicas, como a Catedral Metropolitana de Nossa Senhora Aparecida.Além disso, há também as opções tradicionais de museus, como os Museu Vivo da Memória Candanga, Museu de Arte de Brasilia e o Museu Histórico de Brasília.
            </Text>
            <MaterialIcons name="museum" size={26} color="#003a2b"/>
            <Text style={styles.modalText}>
            Sendo a capital do país, Brasília oferece uma grande possibilidade de turismo político, com os memoriais de JK e Itamar Franco, permitindo até uma visita guiada pelo Congresso Federal.
            </Text>
            <MaterialCommunityIcons name="bridge" size={26} color="#003a2b"/>
            <Text style={styles.modalText}>
            A Ponte Juscelino Kubitschek, também conhecida como Ponte JK, é uma das atrações mais famosas de Brasília, sendo uma obra de arquitetura moderna e uma importante conexão entre as partes norte e sul da cidade.
            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      <Pressable style={styles.card1} onPress={() => setModalVisible1(true)}>
        <View style={styles.conView}>
          <Image 
            style={styles.logoState} 
            source={require('../../src/logoState.png')}
          />
          <Text style={styles.textP1}>Goiás</Text>
        </View>
      </Pressable>

      <Pressable style={styles.card2}  onPress={() => setModalVisible2(true)}>
        <View style={styles.conView}>
          <Image 
            style={styles.logoState} 
            source={require('../../src/dfState.png')}
          />
          <Text style={styles.textP1}>Brasília</Text>
        </View>
      </Pressable>
    </ScrollView>
   </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card1:{
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#d2d2d2',
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  card2:{
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#d2d2d2',
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  conView:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  textP1:{
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 7,
  },
  logoState:{
    width: 55,
    height: 35
  },
  lateralView:{
    padding: 10
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '100%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    justifyContent: 'center',
    
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  
})