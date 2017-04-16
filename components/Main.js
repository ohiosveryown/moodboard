
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

var Lightbox = require('react-native-lightbox');
const { height, width} = Dimensions.get('window');
const activeProps = { resizeMode: 'contain', flex: 1, width };

export default class Main extends Component {
  render() {
    return (
      <View>

        <Lightbox activeProps={activeProps} backgroundColor="rgba(255,255,255,0.2)" underlayColor="white">
          <Image
            style={{ height: 100, resizeMode: 'contain' }}
            source={require('../Assets/Imgs/lamp.png')}
          />
        </Lightbox>

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
