
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import base from './Base';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.viewWrapper}>
        <Text style={styles.titleHeading}>
          Vibes
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewWrapper: {
    backgroundColor: 'honeydew',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeading: {
    fontSize: 40,
    //fontWeight: '800',
    fontFamily: 'Karla',
  },
});
