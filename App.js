// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppStack from './routes/AppStack';

export default function App() {
  return (
    <>
      <AppStack/>
      <StatusBar style="light" />
    </>
    
  );
}