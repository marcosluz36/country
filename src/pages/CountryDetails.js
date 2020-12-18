import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Image, Text, View, Dimensions} from 'react-native';


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
    paddingVertical: 20,
  },
  header: {
    flex: 3,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  image:{
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
    width: 224,
    height: 168
  },
  name: {
    flex: 1,
    fontSize: 32,
    marginVertical: 10
  },
  results:{
    flex: 3,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  lines: {
    flex: 1,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  informations: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginVertical: 10
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 10
  },
  subText: {
    flex: 1,
    fontSize: 16
  }
});