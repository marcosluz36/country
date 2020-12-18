import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import AppStack from './routes/AppStack';
import { Poppins_300Ligth, Poppins_900Black , Poppins_500Medium } from '@expo-google-fonts/poppins';
import {Aclonica_400Regular, useFonts} from '@expo-google-fonts/aclonica';
import { View, Text } from 'react-native';


export default function App() {
  // let [fontsLoaded] = useFonts({
  //   // "Poppins ExtraBold": require('./assets/Poppins-Bold.ttf'),
  //   // "Poppins Ligth": require('./assets/Poppins-Light.ttf'),
  //   Poppins_300Ligth,
  //   Poppins_500Medium,
  //   Aclonica_400Regular
  // });
  
  // if(!fontsLoaded){
  //   return <AppLoading/>
  // }else{
    return (
      <AppStack/>
    ); 
  // }
  
}