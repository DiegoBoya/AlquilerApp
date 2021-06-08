import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import Favorito from './Favorito';


const Auto = ({ marca, modelo, precio, km }) => {
  return (
    <View style={styles.borde}>
      <TouchableOpacity
            onPress={() => {
              alert('mostrando detalles')
              console.log("mostrando detalles")
          }}
          >
        <Image
          source={{ uri: 'https://picsum.photos/200/200' }}
          style={styles.foto}
        />
      </TouchableOpacity>

      <Text style={styles.title}> {marca} </Text>
      <Text style={styles.subtitle}> {modelo} </Text>
      <Text> {km} </Text>
      <Text> {precio} </Text>
      <Text> en cada uri poner la foto de la BD de cada auto</Text>



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