// In App.js in a new project

import * as React from 'react';
import { StatusBar, View, Text } from 'react-native';
import AppStack from './routes/AppStack';

export default function App() {
  return (
    <>
      <AppStack/>
      <StatusBar style="light" />
    </>
    
  );
}