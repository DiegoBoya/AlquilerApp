import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect , useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Estacionamiento from '../Components/Estacionamiento';
import { log } from 'react-native-reanimated';

export default function ScreenHome({navigation, route}) {
  const Stack = createStackNavigator();
  const [estacionamientos, setEstacionamientos] = useState([]);
  
  async function buscarEstacionamiento() {
    const token = await AsyncStorage.getItem('token');
    const requestOptions = {
      method: "GET",
      headers: {Authorization: token} 
    }
    try {
      const est = fetch('http://localhost:3000/api/estacionamientos/', requestOptions);
      console.log(est)
      return est
      .then(res => res.json())
      .then(json => {
        console.log(json.est);
        setEstacionamientos(json);
      })
      .catch(error => console.log('Ocurrio el error: ' + error)); 
    }catch(error){console.log(error.message);} 
  }
  
  useEffect(() => {
    buscarEstacionamiento();
  }, []);

  
  return (
          
      <View style={styles.container}>

        <Text style={styles.title}>Nuestros Estacionamientos</Text>
        <StatusBar style='Estacionamientos'/>

        {estacionamientos.map(estacionamiento => (
          <Estacionamiento key={estacionamiento._id} 
          id={estacionamiento._id} 
          navigation={navigation} 
          name={estacionamiento.name} 
          image={estacionamiento.image} 
          location={estacionamiento.location} 
          description={estacionamiento.description} />
        ))}
          
          <Button onPress={()=>{navigation.navigate('ScreenFavoritos')}} title="Favoritos"/>
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
    }
  });