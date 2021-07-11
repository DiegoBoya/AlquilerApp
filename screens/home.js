import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect , useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import Estacionamiento from '../Components/Estacionamiento';
import ScreenProfile from './profile';
import { log } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';

export default function ScreenHome({navigation, route}) {
  const Tabs = createBottomTabNavigator();
  const [isLoading , setIsLoading] = useState(true);
  const [estacionamientos, setEstacionamientos] = useState([]);
  const { updateUser, devolverUsuario } = useContext(AuthContext);
  const usuario = devolverUsuario();
  
  async function buscarEstacionamiento() {
    const token = await AsyncStorage.getItem('token');  
    const auto = {
      asd:'asd',
      asd2:'asdasd'
    }
    const requestOptions = {
      method: "GET",
      headers: {Authorization: token} 
    }
    try {
      const est = fetch('http://localhost:3000/api/estacionamientos/', requestOptions);
      return est
      .then(res => res.json())
      .then(json => {setEstacionamientos(json);})
      .catch(error => console.log('Ocurrio el error: ' + error)); 
    }catch(error){console.log(error.message);} 
  }
  async function getUsuario() {
    const token = await AsyncStorage.getItem('token');
    const requestOptions = {
      method: "GET",
      headers: {Authorization: token} 
    }
    try {
      const user = fetch(`http://localhost:3000/api/users/${usuario._id}`, requestOptions);
      return user
      .then(res => res.json())
      .then(json => {
        updateUser(json);
      })
      .catch(error => console.log('Ocurrio el error: ' + error)); 
    }catch(error){console.log(error.message);} 
  }


  
  useEffect(() => {
    buscarEstacionamiento();
    getUsuario();
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500)
  }, []);

  if( isLoading ){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        <Text>Loading...</Text>
      </View>
    );}
  
  return (
      <View style={styles.container}>
        <Button onPress={()=>{navigation.navigate('ScreenProfile')}} title="Perfil"/>
        <Button onPress={()=>{navigation.navigate('ScreenAutoAlquilado')}} title="Auto Alquilado"/>
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