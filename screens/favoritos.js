import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';
import AsyncStorage from '@react-native-community/async-storage';
import Auto from '../Components/Auto';


export default function ScreenFavoritos({navigation}) {
  const { devolverUsuario } = useContext(AuthContext);
  const [favs, setFavs] = useState([]);
  const user = devolverUsuario();
  

  async function getFavoritos(){
    const token = await AsyncStorage.getItem('token');  
    const requestOptions = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*',
        Authorization: token
      }
    };
    try{
      await fetch(`http://localhost:3000/api/users/getAllMyFavorites/${user._id}`, requestOptions)
      .then(res => res.json())
      .then(json => setFavs(json));
    }catch(error){
    alert(error.message); 
    console.log(error.message);
    }
  }

  useEffect(() => {
    getFavoritos();
  }, [])

  if(user.favoritos == 0){
  return (
          
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenido {`${user.firstName}`}!!</Text>
        <Text style={styles.shortText}>Empieza a agregar autos a favoritos para que aparezcan en este sitio!</Text>
        <Button onPress={()=>{navigation.push('ScreenHome')}} title="Explorar"/>
        <Button onPress={()=>{navigation.push('ScreenProfile')}} title="Perfil"/>
    </View>
        
  );}
    return(
      <View style={styles.container}>
        {favs.map(favorito => (
          <Auto
          key={favorito._id}
          modelo={favorito.modelo}
          marca={favorito.marca}
          año={favorito.año}
          imagen={favorito.imagen}
          id={favorito._id}
          navigation={navigation}
          />
        ))}
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