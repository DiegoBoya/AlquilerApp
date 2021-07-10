import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';
import Favorito from './Favorito';



const Auto = ({ marca, modelo, año, imagen, precio, km, navigation }) => {

 

  return (
    <View style={styles.borde}>
      <TouchableOpacity
            onPress={() => {
              alert('mostrando detalles')
              console.log("mostrando detalles")
          }}
          >
        <Image
          source={imagen}
          style={styles.foto}
        />
      </TouchableOpacity>

      <Text style={styles.title}> {marca} </Text>
      <Text style={styles.subtitle}> {modelo} </Text>
      <Text> {km} </Text>
      <Text> {precio} </Text>
      <Text> {año} </Text>
      <Text> en cada uri poner la foto de la BD de cada auto</Text>

    

      <Favorito />

      <Button onPress={()=>{
                navigation.navigate('ScreenDetallesDelAuto')
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

  },
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