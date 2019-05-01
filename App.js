import { StyleSheet, Text, View } from 'react-native';
import {APP_COLORS} from "./src/constants/colors";

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import StartScreen from './src/screens/StartScreen';
import LlistaScreen from './src/screens/LlistaScreen';
import ResultatScreen from './src/screens/ResultatScreen';
import Count2Screen from './src/screens/Count2Screen';
import Count1Screen from './src/screens/Count1Screen';
import Count3Screen from './src/screens/Count3Screen';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key = "root" hideNavBar={true}>
          <Scene key = "inici" component = {StartScreen}/>
          <Scene key = "llista" component = {LlistaScreen}/>
          <Scene key = "result" component = {ResultatScreen}/>
          <Scene key = "count3" component = {Count3Screen}/>
          <Scene key = "count2" component = {Count2Screen}/>
          <Scene key = "count1" component = {Count1Screen}/>
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
