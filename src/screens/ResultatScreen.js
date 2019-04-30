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
        const {viewStyle, imageStyle, textStyle} = styles;
        return (
            <View style = {viewStyle}>
              <Text style = {textStyle}>UEEEEE</Text>
            </View>   
        );
    }
  };

  const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.taronja,
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color:APP_COLORS.groc,
        fontSize: 30,
        fontWeight: 'bold',
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