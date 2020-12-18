import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, Text, View, Image, Dimensions} from 'react-native';
import api from '../../utils/api';
import Title from '../components/Title';



function Informations(props){
  return(
    <View style={styles.informations}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.subText}>{props.subText}</Text>
    </View>
  )
}

export default function CountryDetails() {

  return (
    <View style={styles.container}>
      <Title action={true}/>
        <View style={styles.header}>
          <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png'}} style={styles.image} />
          <Text style={styles.name}>Nome do País</Text>
        </View>
        <Text />
        <View style={styles.results}>
          <View style={styles.lines}>
            <Informations text={"Região:"} subText={"Americas"} />
            <Informations text={"População:"} subText={"Americas"} />
            <Informations text={"Moeda:"} subText={"Americas"} />
          </View>
          <View style={styles.lines}>
            <Informations text={"Sub-Região:"} subText={"Americas"} />
            <Informations text={"Idioma:"} subText={"Americas"} />
            <Informations text={"Bloco Econômico:"} subText={"Americas"} />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F5',
    paddingVertical: 20,
  },
  header: {
    flex: 3,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  image:{
    flex: 2,
    width: 260,
    height: 150,
  },
  name: {
    flex: 1,
    fontSize: 32,
    marginVertical: 10
  },
  results:{
    flex: 3,
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'flex-start'
  },
  lines: {
    flex: 1,
    width: '50%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  informations: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    // marginVertical: 10
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    // marginBottom: 
  },
  subText: {
    flex: 1,
    fontSize: 16
  }
});