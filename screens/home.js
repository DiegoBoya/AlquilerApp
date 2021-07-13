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
    }, 1000)
  }, []);

  if( isLoading ){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: 'darkslategrey'}}>
        <Text>Loading...</Text>
      </View>
    );}
  
  return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.enviar} onPress={()=>{navigation.navigate('ScreenProfile')}} title="Perfil"> Perfil </Text>
          <Text style={styles.enviar} onPress={()=>{navigation.navigate('ScreenAutoAlquilado')}} title="Auto Alquilado"> Terminar Alquiler </Text>
        </View>
        
        <Text style={styles.title}>Nuestros Estacionamientos</Text>
        <StatusBar style='Estacionamientos'/>

        {estacionamientos.map(estacionamiento => (
          <Estacionamiento key={estacionamiento._id} 
          id={estacionamiento._id} 
          navigation={navigation} 
          name={estacionamiento.name} 
          image={estacionamiento.image} 
          location={estacionamiento.location} 
          description={estacionamiento.description}
          cantAutos={estacionamiento.auto.length} />
        ))}   
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
    },
    foto: {
      width: 350,
      height: 200
    },
  
    title: { 
      fontSize: 25,
      fontWeight: "bold",
      color: 'darksalmon',
      marginEnd: 10
    },
  
    touchable: {
      fontSize: 12,
      backgroundColor: 'black',
      margin: 10,
      padding: 5
    },
    buttonText: {
      color: '#fff'
    },
    enviar: {
      width: 100,
      height: 50,
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
  });