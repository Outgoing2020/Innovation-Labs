/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize: 30,
    
  }
});

export default class SwipeScreen extends React.Component {
  render(){
    return (
      <View style={styles.containter}>
      <Text style={styles.text}>Swipe</Text>
      </View>
    );
  }
}
