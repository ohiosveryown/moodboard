
import React, { Component } from 'react';
import {
  /*AppRegistry,*/
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  Dimensions,
} from 'react-native';

import base from './Base';
import AuthorMichelle from './AuthorMichelle'

var Lightbox = require('react-native-lightbox');
const { height, width} = Dimensions.get('window');
const activeProps = { resizeMode: 'contain', flex: 1, width };

export default class Main extends Component {
  render() {
    return (
      <View>

        <Text style={styles.titleHeading}>
          INTERIORS
        </Text>

        <Text style={styles.subHeading}>
          Our moodboard for interior inspiration – browse around.
        </Text>

        <AuthorMichelle />

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
    fontFamily: 'univers-condensedbold',
    fontSize: 24,
    marginBottom: 16,
  },
  subHeading: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    marginBottom: 56,
  },
});


/*

<Lightbox activeProps={activeProps} backgroundColor="rgba(255,255,255,0.2)" underlayColor="white">
  <Image
    style={{ height: 100, resizeMode: 'contain' }}
    source={require('../Assets/Imgs/lamp.png')}
  />
</Lightbox>

*/
