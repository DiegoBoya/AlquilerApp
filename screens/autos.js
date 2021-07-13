import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auto from '../Components/Auto';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RNPickerSelect from 'react-native-picker-select';
//import Barrita from './Barrita';
//import portada from './assets/portada.png';
//import * as ImagePicker from 'expo-image-picker';
import {AuthContext} from '../Components/Context';

export default function ScreenAutos({navigation, route}) {
  const Stack = createStackNavigator();
  const [autos, setAutos] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [Drop, setDrop] = useState('');
  const { updateUser, devolverUsuario } = useContext(AuthContext);
  
  const usuario = devolverUsuario();
  
  console.log(route)
  
  async function buscarAutos() {
    const token = await AsyncStorage.getItem('token');
    const requestOptions = {
      method: "GET",
      headers: {Authorization: token}
    }
    try{
    const aut = fetch(`http://localhost:3000/api/estacionamientos/getCars/${route.params._id}`, requestOptions);
    //const aut = fetch('http://localhost:3000/api/autos', requestOptions);
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

  useEffect(() =>{
    console.log('buscarAutos()');    
    console.log('getUsuario()');
    getUsuario();
    setTimeout(()=>{
    buscarAutos();
    setIsLoading(false);
    },1000);
  }, []);


  if( isLoading ){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        <Text>Loading...</Text>
      </View>
    );}

  const dropdown = Array.from(new Set(autos));
  
  
  console.log(dropdown);

  return (    
  <View style={styles.container}>
      {console.log(devolverUsuario())}
    <View style={styles.select}> 

    <RNPickerSelect
            onValueChange={(value) => setDrop(value)} 
            items={dropdown.map(
              auto => (
                {
                  label: auto.modelo,
                  value: auto.modelo
                })
            )}
              
        />


    </View>
    

    {console.log(Drop)}
    
    {
      (Drop === null || Drop === "Select an item...") ? (
        autos.map(auto => auto.estado === "Disponible" ? (
          <Auto key={auto._id} modelo={auto.modelo} marca={auto.marca} año={auto.año} imagen={auto.imagen} id={auto._id} navigation={navigation} />): <Text> </Text>)
      ) : (autos.map(auto => auto.estado === "Disponible" && Drop === auto.modelo ? (
        <Auto key={auto._id} modelo={auto.modelo} marca={auto.marca} año={auto.año} imagen={auto.imagen} id={auto._id} navigation={navigation} />) : <Text>  </Text>))    
    }
      


  </View>
    );}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'darkslategrey',
          alignItems: 'center',
          justifyContent: 'center',
        },
        select: {
          alignContent: 'center',
          alignItems: 'center'
        },
        foto: {
          width: 350,
          height: 200
        },
        title: { fontSize: 30 },
            
      });