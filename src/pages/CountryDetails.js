import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, Text, View, Image, Dimensions} from 'react-native';
import api from '../../utils/api';
import Title from '../components/Title';


export default function CountryDetails() {

  return (
    <View style={styles.container}>
        <Title />
        <Image />
        <Text>Nome do País</Text>
        <View>
          <View style={styles.lines}>
            <Text>Região</Text>
            <Text>Sub-região</Text>
          </View>
          <View style={styles.lines}>
            <Text>População</Text>
            <Text>Idioma</Text>
          </View>
          <View style={styles.lines}>
            <Text>Moeda</Text>
            <Text>Bloco Econômico</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lines: {
    
  }
});