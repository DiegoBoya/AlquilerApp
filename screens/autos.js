import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auto from '../Components/Auto';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import Barrita from './Barrita';
//import portada from './assets/portada.png';
//import * as ImagePicker from 'expo-image-picker';

export default function ScreenAutos({navigation, route}) {
  const Stack = createStackNavigator();
  const [autos, setAutos] = useState([]);

  async function buscarAutos() {
    const token = await AsyncStorage.getItem('token');
    const requestOptions = {
      method: "GET",
      headers: {Authorization: token}
    }
    try{
    const aut = fetch('http://localhost:3000/api/autos', requestOptions);
    // api/estacionamientos/_id?
    //'/api/estacionamientos'
    return aut
      .then(res => res.json())
      .then(json => {
        console.log('la busqueda' + json);
        setAutos(json);
      })
      .catch(error => console.log('Ocurrio un error' + error));
    }catch(error){console.log(error.message);}
  }

  useEffect(() => {
    buscarAutos();
  }, []);
  return (    
  <View style={styles.container}>
      
    <Text style={styles.title}> Hola ,Viaja como quieras ^-^ </Text>
    <StatusBar style="auto" />

    <Button
      title="primerBoton"
      color="red"
      onPress={() => alert('boton comun')}
    />

    <TouchableOpacity
      onPress={() => alert('el touchable')}
      style={styles.touchable}
    >
      <Text style={styles.buttonText}> el touchable </Text>
    </TouchableOpacity>

    {autos.map(auto => (
      <Auto key={auto._id} modelo={auto.modelo} marca={auto.marca} id={auto._id} />
    ))}


  </View>
    );}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'yellow',
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
        }
      });