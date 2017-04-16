
import React, { Component } from 'react';
import {
  /*AppRegistry,*/
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import base from './Base';

export default class AuthorMichelle extends Component {
  render() {
    return (

      <View>

        <View style={styles.viewWrapper} >
          <Image
            style={{ height: 48, width: 48 }}
            source={require('../Assets/Imgs/michelle.png')}
          />

        <View style={styles.textWrapper}>
          <Text>
            Created by: Michelle
          </Text>

          <Text>
            on May 12, 2017
          </Text>
        </View>

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  titleHeading: {
    fontSize: 32,
    fontFamily: 'univers-light',
    //fontFamily: 'univers-condensedbold',
  },
  viewWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
  },
  textWrapper: {
    justifyContent: 'center',
  }
});
