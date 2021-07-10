import React , {useContext, useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import {AuthContext} from './Context';

export default function ScreenGenerarAlquiler({navigation, user}) {
    const { devolverUsuario } = useContext(AuthContext);

    return (
            
        <View>
            {console.log(devolverUsuario())}
            <Text>Generar Alquiler</Text>
            <Button onPress={()=>{navigation.push('ScreenHome')}} title="Alquilar"/>
        </View>
          
    );}