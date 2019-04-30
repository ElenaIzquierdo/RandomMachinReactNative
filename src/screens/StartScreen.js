import React from 'react';
import {APP_COLORS} from "../constants/colors";
import { Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Title from "../components/Title";
import DiceButton from '../components/DiceButton';


export default class Inici extends React.Component {
  onPress = () => {
    Actions.llista();
  }
    render() {
        const {viewStyle, imageStyle, touchableStyle} = styles;
        return (
            <View style = {viewStyle}>
              <TouchableOpacity style={styles.button} onPress={this.onPress} style = {touchableStyle}>
                <Title titleText = {'Randomize'}/>
                <Image source={require('../images/dices.png')} style = {imageStyle}/>
              </TouchableOpacity>
            </View>   
        );
    }
  };

  const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.groc,
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
      width: 150,
      height: 150,
      borderWidth: 5,
      borderColor: APP_COLORS.color_neutral,
      borderRadius: 75
  },
  touchableStyle: {
    alignItems: 'center',
    padding: 10
  }
}