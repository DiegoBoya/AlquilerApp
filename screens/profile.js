import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';


export default function ScreenProfile({navigation}) {
  const { devolverUsuario } = useContext(AuthContext);
  const user = devolverUsuario();

  return (
          
    <View style={styles.container}>
        <Text style={styles.text}>Nombre: {`${user.firstName}`}</Text>
        <Text style={styles.text}>Apellido: {`${user.lastName}`}</Text>

        <View style={styles.column}>
          <Text style={styles.enviar} onPress={()=>{navigation.push('ScreenFavoritos')}} title="Favoritos">Favoritos</Text>
          <Text style={styles.enviar} onPress={()=>{navigation.push('ScreenHome')}} title="Home">Home</Text>

        </View>
       
    </View>
        
  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkslategrey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    column:{
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      alignItems: 'center',
      alignContent: 'center'
    },
    enviar: {
      width: 100,
      height: 25,
      margin: 10,
      alignItems: 'center',
      alignContent: 'center',
      textAlign: 'center',
      backgroundColor: 'dodgerblue',
      borderColor: "dodgerblue",
      color: 'white',
      borderWidth: 2.5,
      borderRadius: 15,
      fontWeight: 'bold'
    },
    text : {
          width: 200,
          height: 50,
          alignItems: 'center',
          textAlign: 'center',
          margin: 10,
          backgroundColor: 'darkslategrey',
          borderColor: "darksalmon",
          color: 'white',
          borderWidth: 5,
          borderRadius: 30,
        },
  });