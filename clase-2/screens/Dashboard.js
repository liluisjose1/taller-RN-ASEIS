import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from "./theme";

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenido
        </Text>
        <Text style={styles.instructions}>
          Hemos creado app login con Firebase & React Native
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize:12,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});