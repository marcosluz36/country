import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 46, color: '#fff', textAlign: 'center'}}>Lucas Barbosa Leite Condensado</Text>
      <Image source={{uri: 'https://api.tendaatacado.com.br/fotos/1653_big.jpg'}} style={{width: 120, height: 120, marginVertical: 15}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
