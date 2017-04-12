
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './components/Splash'
import List from './components/List'

export default class moodboard extends Component {
  render() {
    return (
      /* <Splash /> */
      <List />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('moodboard', () => moodboard);
