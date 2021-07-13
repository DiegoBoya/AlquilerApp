import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';
import AsyncStorage from '@react-native-community/async-storage';
import Auto from '../Components/Auto';
import AutoFavorito from '../Components/AutoFavorito';


export default function ScreenFavoritos({navigation}) {
  const { devolverUsuario , updateUser } = useContext(AuthContext);
  const [favs, setFavs] = useState([]);
  const [favsOrdered, setFavsOrdered] = useState([]);
  const user = devolverUsuario();
  const finFavs = [];  
  const [isLoading, setIsLoading] = useState(true);

  function definoVisible(id){
    let trueFalse = true;
    user.favoritos.forEach(fav => {
      trueFalse ?
      fav._id == id ?
      trueFalse = false :
      trueFalse = true
      : console.log('Ya encontrado');
  });
  return trueFalse;
  }

  async function getFavoritos(){
    let token = await AsyncStorage.getItem('token');  
    let requestOptions = {
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
      .then(json => orderFavoritos(json));
    }catch(error){
    alert(error.message); 
    console.log(error.message);
    }
  }
  function orderFavoritos(json) {
    console.log('Favoritos: ' + json)
    json.map(favorito => {
      let i = 0;
      let notFound = true;
      console.log('valor i = ' + i + " Valor notFound =  " + notFound);
      while(i < finFavs.length && notFound){
        console.log('itero');
        finFavs[i]?._id == favorito._id ?
        notFound = false : i++;
      }
      notFound ? finFavs[i] = favorito : console.log('no agrego.');
    })
    setFavsOrdered(finFavs);
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
    const usuario = fetch(`http://localhost:3000/api/users/${user._id}`, requestOptions)
    .then(res => res.json())
    .then(json => updateUser(json));
  }

  useEffect(() => {
    actualizar();
    getFavoritos();
    setTimeout(()=>{
      setIsLoading(false);
    }, 400)
  }, [])

  if(isLoading){
  return(
    <View style={styles.container}>
      <Text> Loading... </Text>
    </View>

  )
}

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
        {favsOrdered.map(favorito => favorito.estado === "Disponible" ? (
          <Auto
          key={favorito._id}
          modelo={favorito.modelo}
          marca={favorito.marca}
          año={favorito.año}
          imagen={favorito.imagen}
          id={favorito._id}
          navigation={navigation}
          visible={definoVisible(favorito._id)}
          />
        ): (
          <AutoFavorito
          key={favorito._id}
          modelo={favorito.modelo}
          marca={favorito.marca}
          año={favorito.año}
          imagen={favorito.imagen}
          id={favorito._id}
          visible={definoVisible(favorito._id)}
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