import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';
import DetallesDelAuto from '../Components/DetallesDelAuto';
import { createStackNavigator } from '@react-navigation/stack';


export default function ScreenDetallesDelAuto({navigation, route}) {
  const Stack = createStackNavigator();
  const { devolverUsuario } = useContext(AuthContext);
  return (
    
    <View>
        {console.log(devolverUsuario())}
        {console.log(route.params.auto)}
        
        <DetallesDelAuto navigation={navigation} auto={route.params.auto} />

    </View>
        
  );}