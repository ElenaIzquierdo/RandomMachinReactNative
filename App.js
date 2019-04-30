import { StyleSheet, Text, View } from 'react-native';
import {APP_COLORS} from "./src/constants/colors";

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import StartScreen from './src/screens/StartScreen';
import LlistaScreen from './src/screens/LlistaScreen';
import ResultatScreen from './src/screens/ResultatScreen';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key = "root" hideNavBar={true}>
          <Scene key = "inici" component = {StartScreen}/>
          <Scene key = "llista" component = {LlistaScreen}/>
          <Scene key = "result" component = {ResultatScreen}/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.groc,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
