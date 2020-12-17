import * as React from 'react';
import {View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import AppStack from './routes/AppStack';
import { Poppins_300Ligth, Poppins_900Black , Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Ligth,
    Poppins_900Black,
    Poppins_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
      <AppStack/>
    );
  }
  
}