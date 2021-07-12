//import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from './Context';
import Favorito from './Favorito';
import { createStackNavigator } from '@react-navigation/stack';


const Auto = ({ marca, modelo, año, imagen, id, navigation }) => {
  const Stack = createStackNavigator();
  const miAuto = { marca: marca,
                   modelo: modelo,
                   año:año,
                   imagen:imagen , 
                   id: id};

  return (
    <View style={styles.borde}>
        <Image
          source={imagen}
          style={styles.foto}
        />

      <Text style={styles.title}> {modelo} </Text>
      <View style={styles.column}>
      <Text style={styles.subtitle}> {marca + " | "+ año}  </Text>
      
      <Favorito idAuto={id}/>


      </View>
      <View style={styles.container}>
      <Text style={styles.enviar} onPress={()=>{
                navigation.navigate('ScreenDetallesDelAuto', {auto: miAuto})
                }} title="Alquilar Ahora!">
        Alquilar Ahora!
      </Text>
      </View>
      

    </View >
  );
};


const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center'
  },
  foto: {
    width: 350,
    height: 200,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 25
  },
  column:{
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    alignContent: 'center'
  },
  title: { 
    fontSize: 30,
    color: 'white'
  },
  enviar: {
    width: 300,
    height: 25,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'dodgerblue',
    borderColor: "dodgerblue",
    color: 'white',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 5,
    fontWeight: 'bold'
  },
  subtitle: { 
    fontSize: 24,
    color: 'white', 
    alignContent: 'center',
    alignItems: 'center'

  },

  borde: {
    borderWidth: 2,
    borderRadius: 30,
    color: 'darkSalmon'

  }
  
})

export default Auto;