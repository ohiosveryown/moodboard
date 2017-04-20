
import React, { Component } from 'react';
import {
  /*AppRegistry,*/
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import base from './Base';

export default class Author extends Component {
  render() {
    return (

      <View>

        <View style={styles.viewWrapper} >
          <Image
            style={{ height: 48, width: 48, }}
            source={require('../Assets/Imgs/michelle.png')}
          />

          <View style={styles.textWrapper}>
            <Text style={styles.author}>
              Created by: Michelle
            </Text>

            <Text style={styles.date}>
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
  },
  textWrapper: {
    justifyContent: 'center',
    marginLeft: 8,
    marginBottom: 32,
  },
  author: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
  },
  date: {
    fontFamily: 'Karla-Regular',
    fontSize: 16,
    opacity: 0.6,
    //marginTop: -4,
  },

});
