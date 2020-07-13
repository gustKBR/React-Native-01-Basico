import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BoasVindas from './components/BoasVindas';
import Calculos from './components/Calculos';

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <BoasVindas saudacao='Bom dia!' />
        <Calculos/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: '#757575',
  },
});
