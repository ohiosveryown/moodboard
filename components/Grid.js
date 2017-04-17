
import React, { Component } from 'react';
import {
  /*AppRegistry,*/
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import base from './Base';
import Author from './Author';


var Lightbox = require('react-native-lightbox');
const { height, width} = Dimensions.get('window');
const activeProps = { resizeMode: 'contain', flex: 1, alignItems: 'flex-start', width };
const activee = { alignItems: 'center', justifyContent: 'center', width, overflow: 'hidden' };

export default class Main extends Component {
  render() {
    return (
      <View style={styles.wrapper}>

        <View>

          <View>

            <Lightbox activeProps={activee} backgroundColor="rgba(255,255,255,0.95)" underlayColor="white">
              <Image
                style={{ width: 320, height: 216, overflow: 'hidden'  }}
                source={require('../Assets/Imgs/lamp.png')}
              />
            </Lightbox>

          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleHeading: {
    fontFamily: 'univers-condensedbold',
    fontSize: 24,
    marginBottom: 16,
  },
  subHeading: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


/*

<Lightbox activeProps={activeProps} backgroundColor="rgba(255,255,255,0.2)" underlayColor="white">
  <Image
    style={{ height: 100, resizeMode: 'contain' }}
    source={require('../Assets/Imgs/lamp.png')}
  />
</Lightbox>

/////////

<Lightbox activeProps={activeProps} backgroundColor="rgba(255,255,255,0.9)" underlayColor="white">
  <Image
    style={{ width: 156, height: 104, resizeMode: 'contain' }}
    source={require('../Assets/Imgs/chairs.png')}
  />
</Lightbox>

<Lightbox activeProps={activee} backgroundColor="rgba(255,255,255,0.9)" underlayColor="white">
  <Image
    style={{ width: 156, height: 104,  }}
    source={require('../Assets/Imgs/desk.png')}
  />
</Lightbox>

</View>

<Lightbox activeProps={activeProps} backgroundColor="rgba(255,255,255,0.9)" underlayColor="white">
<Image
  style={{ width: 319, height: 216, resizeMode: 'contain' }}
  source={require('../Assets/Imgs/lamp.png')}
/>
</Lightbox>

*/
