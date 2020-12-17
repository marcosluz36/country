import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, Text, View, Image, Dimensions} from 'react-native';
import api from '../../utils/api';
import Title from '../components/Title';

const width = Dimensions.get('screen').width;

export default function HomeScreen() {

  const [country, setCountry] = useState('...');

  useEffect(() => {
    api.get(`name/brasil`).then((resp)=>{
      //alert(resp.data[0].region);
      //setCountry(resp.data)
    });
  },[])

  function setRegion(text) {
    api.get(`name/${text}`).then((resp) => {
      if(text.length>=3){
        setCountry(resp.data[0].region);  
      } 
      
      else {
        setCountry('?');
      }

    }).catch((e) => {
      setCountry('?');
    })
      
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title/>
      <TextInput
        style={styles.input}
        onChangeText={text => setRegion(text)}
      />
      <Text>Região: {country}.</Text>
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
  input: {
    width: width * 0.8,
    height: 45,
    borderRadius: 25,
    borderColor: 'gray', 
    borderWidth: 1,
    paddingHorizontal: 15 
  }
});