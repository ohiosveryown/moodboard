
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './components/Splash'

export default class moodboard extends Component {
  render() {
    return (
      <Splash />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('moodboard', () => moodboard);
