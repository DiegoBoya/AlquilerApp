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
        <Button style={styles.boton} onPress={()=>{navigation.push('ScreenFavoritos')}} title="Favoritos"/>
        <Button style={styles.boton} onPress={()=>{navigation.push('ScreenHome')}} title="Home"/>
    </View>
        
  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkslategrey',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    foto: {
      width: 350,
      height: 200
    },
  
    title: { fontSize: 30 },
  
    touchable: {
      fontSize: 12,
      backgroundColor: 'black',
      margin: 10,
      padding: 5
    },
  
    buttonText: {
      color: '#fff'
    },

    shortText: {
      fontSize: 14,
      fontStyle: 'italic'
    },
    subtitle: { 
        fontSize: 24,
        alignItems: 'center',
        alignContent: 'center',
        color:'white',
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
      boton: {
        width: 200,
        color: 'red',
        margin: 10,
        alignItems: 'center',
        textAlign: 'center',
      },
      enviar: {
        width: 100,
        height: 25,
        margin: 10,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'dodgerblue',
        borderColor: "dodgerblue",
        color: 'white',
        borderWidth: 2.5,
        borderRadius: 15,
        fontWeight: 'bold'
      }
  });