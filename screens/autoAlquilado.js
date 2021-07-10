import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';
import AutoAlquilado from '../Components/AutoAlquilado';


export default function ScreenAutoAlquilado({navigation, user}) {
  const { devolverUsuario } = useContext(AuthContext);
    
  

  
  return (
          
    <View>
        {console.log(devolverUsuario())}

        <Text>Welcome!!</Text>

        <AutoAlquilado user={devolverUsuario()} navigation={navigation}/>



        
    </View>
        
  );}


  /*<Button onPress={()=>{navigation.push('ScreenHome')}} title="Home"/>*/