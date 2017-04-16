
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './components/Splash'
import List from './components/List'
import Main from './components/Main'

export default class moodboard extends Component {
  render() {
    return (
      /* <Splash /> */
      <Main />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('moodboard', () => moodboard);
