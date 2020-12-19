import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Image, Text, View, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import Title from '../components/Title';


function Informations(props){
  return(
    <View style={styles.informations}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.subText}>{props.subText}</Text>
    </View>
  )
}

export default function CountryDetails({ route, navigation }) {
  const { countryValues } = route.params;
  const regionBlock = countryValues.regionalBlocs[0] === undefined ? 'N/A' : countryValues.regionalBlocs[0].acronym;
  return (
    <View style={styles.container}>
      <Title action={true}/>
      <View style={styles.header}>
        <Image 
          source={{uri: `https://flagcdn.com/224x168/${countryValues.alpha2Code.toLowerCase()}.png`}}
          style={styles.image}
          />
        <Text style={styles.name}>{countryValues.translations.pt}</Text>
      </View>
      <Text />
      <View style={styles.results}>
        <View style={styles.lines}>
          <Informations text={"Região:"} subText={countryValues.region} />
          <Informations text={"População:"} subText={countryValues.population} />
          <Informations text={"Moeda:"} subText={countryValues.currencies[0].name} />
        </View>
        <View style={styles.lines}>
          <Informations text={"Sub-Região:"} subText={countryValues.subregion} />
          <Informations text={"Idioma:"} subText={countryValues.languages[0].name} />
          <Informations text={"Bloco Econômico:"} subText={regionBlock} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F5',
    paddingTop: Constants.statusBarHeight
  },
  header: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopColor: '#999',
    borderBottomColor: '#999',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // backgroundColor: '#e6e6e6'
  },
  image:{
    alignSelf: 'center',
    flex: 2,
    resizeMode: 'contain',
    width: 224,
    height: 168,
    marginTop: 10
  },
  name: {
    flex: 1,
    fontSize: 32,
    marginVertical: 10,
    // backgroundColor: 'red',
    alignSelf: 'center',
    textAlignVertical: 'center'
  },
  results:{
    flex: 5,
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'lightgreen'
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    // marginBottom: 
  },
  subText: {
    flex: 1,
    fontSize: 16
  }
});