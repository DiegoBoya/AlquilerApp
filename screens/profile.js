import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';
import AsyncStorage from '@react-native-community/async-storage';


export default function ScreenProfile({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const { devolverUsuario , updateUser, desconectar} = useContext(AuthContext);
  const user = devolverUsuario();
  const [logout, setLogout] = useState(false);

  async function perfilLogout() {
    alert('Logged out.');
    desconectar();
    setLogout(true);
  }

  async function actualizar(){
    let token = await AsyncStorage.getItem('token');  
    let requestOptions = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*',
        Authorization: token
      }
    };
    fetch(`http://localhost:3000/api/users/${user._id}`, requestOptions)
    .then(res => res.json())
    .then(json => updateUser(json));
  }

  useEffect(() => {
    setTimeout(() =>{
    actualizar();
    setIsLoading(false);
    } , 200)
  },[])

  useEffect(() =>{
    navigation.navigate('ScreenLogin')
  }, [logout])

  if(isLoading){
  return(
    <View style={styles.container}>
    <Text style={{fontSize: 12, color: 'white' , alignContent: 'center'}}>Loading...</Text>
    </View>
  );}

  return (
          
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.text}>Nombre: {`${user.firstName}`}</Text>
        <Text style={styles.text}>Apellido: {`${user.lastName}`}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>Username: {`${user.username}`}</Text>
        {user.mail.length > 15 ? 
        <Text style={styles.textlong}>Email: {`${user.mail}`}</Text>
        : <Text style={styles.text}>Email: {`${user.mail}`}</Text>}
      </View>
        

        <View style={styles.column}>
          <Text style={styles.enviar} onPress={()=>{navigation.push('ScreenFavoritos')}} title="Favoritos">Favoritos</Text>
          <Text style={styles.enviar} onPress={()=>{navigation.push('ScreenHome')}} title="Home">Home</Text>
        </View>
        <Text style={{color: 'red', size: 50}} onPress={()=>{perfilLogout()}} title="Logout">Logout</Text>
       
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
          width: 150,
          height: 50,
          alignItems: 'center',
          textAlign: 'center',
          margin: 8,
          backgroundColor: 'darkslategrey',
          borderColor: "darksalmon",
          color: 'white',
          borderWidth: 5,
          borderRadius: 15,
        },
        textlong : {
          width: 250,
          height: 50,
          alignItems: 'center',
          textAlign: 'center',
          margin: 8,
          backgroundColor: 'darkslategrey',
          borderColor: "darksalmon",
          color: 'white',
          borderWidth: 5,
          borderRadius: 15,
        },
  });