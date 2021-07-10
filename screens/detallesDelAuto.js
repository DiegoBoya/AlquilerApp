import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {AuthContext} from '../Components/Context';
import DetallesDelAuto from '../Components/DetallesDelAuto';


export default function ScreenDetallesDelAuto({navigation, user}) {
  const { devolverUsuario } = useContext(AuthContext);
   const user = devolverUsuario(); 
    return (
            
    <View>
        {console.log(devolverUsuario())}

        <Text>Dale que se alquilaaaaa!!</Text>

        <DetallesDelAuto navigation={navigation} user={user} />



        
    </View>
        
  );}