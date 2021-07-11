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
      <Text style={styles.subtitle}> {marca + " | "+ año}  </Text>
      
      <Favorito idAuto={id}/>

      <Button onPress={()=>{
                navigation.navigate('ScreenDetallesDelAuto', {auto: miAuto})
                }} title="Alquilar Ahora!"/>

    </View >
  );
};


const styles = StyleSheet.create({
  foto: {
    width: 350,
    height: 200,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 25

  },
  title: { fontSize: 30 },

  subtitle: { fontSize: 24 },

  borde: {
    borderWidth: 2,
    borderRadius: 30,

  }
  /*
    favoriteButton: {
      backgroundColor: 'pink',
      color: 'white',
      marginHorizontal: 200,
      //padding: 10,
      margin : 10,
      borderRadius: 25
    }
  */
})

export default Auto;