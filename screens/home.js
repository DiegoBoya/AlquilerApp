import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect , useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';


export default function ScreenHome({navigation}) {
  return (
          
      <View style={{alignItems:'center'}}>
        <Text style={{flex: 1, alignSelf:'center', fontSize:35}}>Aca vendrian los estacionamientos.</Text>
          <Button  onPress={()=>{navigation.navigate('Autos')}} title="Autos"/>
          <Button onPress={()=>{navigation.navigate('Favoritos')}} title="Favoritos"/>
        </View>
  );}