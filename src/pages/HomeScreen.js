import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, Text, View, Image, Dimensions} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import api from '../../utils/api';
import Item from '../components/Item';
import Title from '../components/Title';

const width = Dimensions.get('screen').width;

export default function HomeScreen() {


  const [countries, setCountries] = useState([
    {'name':"A"},
    {'name':"B"},
    {'name':"C"},
  ])

  useEffect(() => {
    // ...
  },[])

  function setCountry(text) {
    api.get(`name/${text}`).then((resp) => {
      if(text.length>=1){
        setCountries(resp.data)
        
      } 
      
      else {
        setCountries([])
      }

    }).catch((e) => {
      setCountries([])
    })
      
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title/>
      <TextInput
        style={styles.input}
        onChangeText={text => setCountry(text)}
      />
        
      <ScrollView style={styles.list}>
        {countries.map(e=><Item name={e.name}/>)}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#F2F5F5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: width * 0.8,
    height: 45,
    borderRadius: 25,
    borderColor: 'gray', 
    borderWidth: 1,
    paddingHorizontal: 15 
  },
  list:{
    marginTop:15,
    width: '95%',
    borderColor: '#58F',
    borderWidth: 2,
    borderRadius: 10,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }
});