import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';


export default function ScreenFavoritos({navigation}) {
  return (
          
    <View>
        <Text>Welcome!!</Text>
        <Button onPress={()=>{navigation.push('Home')}} title="Home"/>
    </View>
        
  );}