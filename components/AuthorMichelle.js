
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

        <View>
          <Image
            style={{ height: 48, width: 48 }}
            source={require('../Assets/Imgs/michelle.png')}
          />
          <Text>
            Created by: Michelle
          </Text>
          
          <Text>
            on May 12, 2017
          </Text>
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
});
