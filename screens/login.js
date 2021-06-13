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
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenidos a NOMBRE APP !!!
      </Text>
      <Text style={styles.content}>
        Si ya tenes un Usuario ingresa en el Login. Y si aun no tenes tu cuenta anda a Register y da de alta tu propio usuario.
      </Text>
      <View>
        <View style={styles.fixToText}>
          <Button onPress={() => {toggleModal()}} title='Login'/>
        </View>
        <View style={styles.fixToText}>
          <Button onPress={() => {toggleModal()}} title='Register'/>
        </View>
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkslategrey',
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      color: 'darksalmon',
      marginTop: 16,
      paddingVertical: 4,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    content: {
      color: 'darksalmon',
      marginTop: 16,
      paddingVertical: 4,
      marginHorizontal: 16,
      textAlign: "center",
      fontSize: 15,
      //fontWeight: "bold"
    },
    fixToText: {
      marginHorizontal: 100,
      marginVertical: 15,
    },
  });