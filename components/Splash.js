
import React, { Component } from 'react';
import {
  /*AppRegistry,*/
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
        <Text>✌🏼</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewWrapper: {
    //backgroundColor: 'honeydew',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeading: {
    fontSize: 32,
    fontFamily: 'univers-light',
    //fontFamily: 'univers-condensedbold',
  },
});
