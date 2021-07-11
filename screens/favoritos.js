import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';


export default function ScreenFavoritos({navigation}) {
  const { devolverUsuario } = useContext(AuthContext);
  const user = devolverUsuario();

  if(user.favoritos == 0){
  return (
          
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenido {`${user.firstName}`}!!</Text>
        <Text style={styles.shortText}>Empieza a agregar autos a favoritos para que aparezcan en este sitio!</Text>
        <Button onPress={()=>{navigation.push('ScreenHome')}} title="Explorar"/>
    </View>
        
  );}
    return(
      <View style={styles.container}>
        
      </View>
    )
}

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
    }
  });