import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, Text, View, Image, Dimensions, ActivityIndicator} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native';

import api from '../../utils/api';
import Item from '../components/Item';
import Title from '../components/Title';

const width = Dimensions.get('screen').width;

const heightSearch = 50;
const borderRadiusGeral = 10;
const fontSizeGeral = 18;

export default function HomeScreen() {


  const [countries, setCountries] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)
  const [searchOption, setSearchOption] = useState("name")

  const navigation = useNavigation();

  useEffect(() => {
    api.get("all").then((resp)=>{
      const data = resp.data.filter(c=>c.region.toLowerCase().includes("urop"))
      setCountries(data)
    })
  },[])

  function setCountry(text) {
    setIsLoaded(false)
    api.get(`${searchOption}/${text}`).then((resp) => {
      //if(text.length>=3){
      setCountries(resp.data)

    }).catch((e) => {
      setCountries([])
      
    }).finally(()=>{
      setIsLoaded(true)
    })
      
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title/>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={text => setCountry(text)}
          placeholder="Digite aqui"
        />
        <View style={styles.pickerView}>
          <Picker
            selectedValue= {searchOption}
            style={{width: "100%", fontSize: 23}}
            onValueChange={(itemValue)=>setSearchOption(itemValue)
             }
          >
            <Picker.Item  label="Nome" value="name"/>
            <Picker.Item  label="Região" value="region"/>
            <Picker.Item  label="Capital" value="capital"/>
    
          </Picker>
        </View>
      </View>
        
      <ScrollView style={[styles.list/*, {backgroundColor: !isLoaded?"#58F":null}*/]}>
        <View style={styles.listContainer}>
          {isLoaded?
            countries.map((e,idx)=>{
              let comp = null
              switch(searchOption){
                case 'capital':
                  comp = e.capital;
                  break;
                case 'region':
                  comp = e.region;
                  break;
                default:
                  break
              }
              return(
              <Item
                key={idx}
                name={e.name}
                complement={comp}
                click={()=> navigation.navigate('CountryDetails')}
              />)
            }):
            <ActivityIndicator style={{marginTop: 50}} size="large" color="#507"/>
          }
        </View>
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
  search:{
    flexDirection:'column',
    justifyContent: 'space-between',
    width: '97%',
    paddingHorizontal: 5,
  },
  input: {
    width: '100%',
    height: heightSearch,
    borderRadius: borderRadiusGeral,
    borderColor: '#74B', 
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: fontSizeGeral,
  },
  pickerView:{
    width: '100%',
    height: heightSearch,
    marginTop: 12,
    borderRadius: borderRadiusGeral,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: fontSizeGeral,
    color: 'purple',
    backgroundColor: '#74B'
  },

  list:{
    marginTop:15,
    width: '100%',
    borderColor: '#58F',
    // borderWidth: 2,
    borderRadius: 10,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  listContainer:{
    width: '100%',
    alignItems: 'center',
    
  }
});