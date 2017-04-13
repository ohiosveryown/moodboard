
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import base from './Base';
import SvgUri from 'react-native-svg-uri';

export default class List extends Component {
  render() {
    return (

      <ScrollView>

        <View style={styles.viewWrapper}>

          <View>
            <Text style={styles.titleHeading}>
              VIBES
            </Text>
          </View>

          <View>
            <Text style={styles.subHeading}>
              Select a board below:
            </Text>
          </View>

          <View>
            <Text style={styles.listHeading}>
              Interiors I
            </Text>
            <Text style={styles.listHeading}>
              Interiors II
            </Text>
            <Text style={styles.listHeading}>
              Exteriors
            </Text>
            <Text style={styles.listHeading}>
              Swatches
            </Text>
          </View>



          <View style={{marginTop: 230, flexDirection: 'row'}}>
            <Text style={styles.logoutHeading}>
              Log Out
            </Text>

            <Image
              style={{width: 56, height: 56, marginLeft: 190}}
              source={require('../Assets/Imgs/newBoard.png')}
            />
          </View>

        </View>


      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  viewWrapper: {
    //borderColor: 'red',
    //borderWidth: 2,
    marginTop: 56,
    marginRight: 32,
    marginBottom: 32,
    marginLeft: 32,
    flex: 1,
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
  listHeading: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    color: '#256EEA',
    marginBottom: 24,
  },
  logoutHeading: {
    opacity: 0.5,
    fontFamily: 'univers-light',
    fontSize: 20,
    marginTop: 12,
  }
});


AppRegistry.registerComponent(
  'List',
  () => List);
