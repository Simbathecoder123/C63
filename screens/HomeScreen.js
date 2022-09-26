import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text, View } from 'react-native';
import {header} from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});