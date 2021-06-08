import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import Login from '../Components/Login';
import Modal from 'react-native-modal';

export default function ScreenLogin({navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () =>{
      setIsModalVisible(!isModalVisible);
    }


  return (
    <View style={{flex: 1, alignItems:'center'}}>
      <Button onPress={() => {toggleModal()}} title='Login?'/>
      <Modal
        isVisible={isModalVisible}>
          <View style={{flex:1 , alignItems:'center'}}>
            <Login/>
          <View>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
          
    //   <View style={{flex:1 , alignItems:'center'}}>
    //     <TouchableOpacity onPress={() => {toggleModal()}}>Login?</TouchableOpacity>
    //     <TextInput placeholder='username' onChangeText={username => setUsername(username)} defaultValue={username}/>
    //     <TextInput placeholder='password' onChangeText={password => setPassword(password)} defaultValue={password}/>
    //     <Button onPress={()=> {login(username, password)}} title='login'/>
    //     <Text>Registro?</Text>
    //     <Button onPress={() => navigation.navigate('Registro')} title="Registro"></Button>
    // </View>
        
  );}