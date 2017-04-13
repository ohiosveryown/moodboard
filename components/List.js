
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import base from './Base';
import SvgUri from 'react-native-svg-uri';

export default class List extends Component {
  render() {
    return (
      <View style={styles.viewWrapper}>

        <View>
          <Text style={styles.titleHeading}>
            VIBES
          </Text>
        </View>

        <View>
          <Text>
            Select a board below.
          </Text>
        </View>

        <View>
          <Text>
            Interiors I
          </Text>
        </View>

        <View>
          <Text>
            Interiors II
          </Text>
        </View>

        <View>
          <Text>
            Exteriors
          </Text>
        </View>

        <View>
          <Text>
            Swatches
          </Text>
        </View>

        <View style={{borderColor: 'red', marginTop: 400, borderWidth: 1, flexDirection: 'row'}}>
          <Text>
            Log Out
          </Text>

          <Image
            style={{width: 56, height: 56}}
            source={require('../Assets/Imgs/newBoard.png')}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewWrapper: {
    //backgroundColor: 'honeydew',
    borderColor: 'red',
    borderWidth: 2,
    marginTop: 32,
    marginRight: 32,
    marginBottom: 32,
    marginLeft: 32,
    flex: 1,
    //boxShadow: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  titleHeading: {
    fontFamily: 'univers-condensedbold',
    fontSize: 24,
    marginBottom: 16,
  }
});
