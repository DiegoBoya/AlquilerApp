import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import Favorito from './Favorito';


const Auto = ({ marca, modelo, año, imagen, precio, km }) => {
  return (
    <View style={styles.borde}>
        <Image
          source={imagen}
          style={styles.foto}
        />
      
      <Text style={styles.title}> {modelo} </Text>
      <Text style={styles.subtitle}> {marca + " | "+ año}  </Text>
      
      <Favorito />

    </View >
  );
};


const styles = StyleSheet.create({
  foto: {
    width: 350,
    height: 200,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 25

  },
  title: { fontSize: 30 },

  subtitle: { fontSize: 24 },

  borde: {
    borderWidth: 2,
    borderRadius: 30,

  },
  /*
    favoriteButton: {
      backgroundColor: 'pink',
      color: 'white',
      marginHorizontal: 200,
      //padding: 10,
      margin : 10,
      borderRadius: 25
    }
  */
})

export default Auto;