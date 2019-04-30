import React from 'react';
import {APP_COLORS} from "../constants/colors";
import { View, TextInput, Alert, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Description from '../components/Description';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';


export default class Inici extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        llista: [],
        i: 0,
        text: ""
      };
    }

    _onPressIcon = () =>{
      llista_aux = this.state.llista;
      llista_aux[this.state.i] = this.state.text;
      this.setState(state => (
        { i: this.state.i + 1,
          llista: llista_aux,
          text: ""
        }
      ));
      this.pintarLlista();
    }

    pintarLlista(){
      return this.state.llista.map((text)=>{
        return(<Text style = {styles.textInputStyle} key = {text}>{text}</Text>);
      }
      );
    }

    render() {
        const {viewStyle, viewStyle2, textInputStyle, viewllistaStyle, viewLlistaFetaStyle} = styles;
        return (
            <View style = {viewStyle}>

              <View style = {viewStyle2}>
                <Description textExpl = {'Llista les opcions'}/>
                <View style = {viewllistaStyle}>
                  <TextInput underlineColorAndroid={APP_COLORS.lila} style = {textInputStyle}
                              onChangeText={(text) => this.setState({text})}
                              value={this.state.text}/>
                  <Ionicons name="md-add-circle-outline" size={33} color={APP_COLORS.lila}
                            onPress = {this._onPressIcon}/>
                </View>       
              </View> 

              <View style = {viewLlistaFetaStyle}>
                {this.pintarLlista()}
              </View>
              
              <Button buttonText = {'Decideix!!'} path = {() => Actions.result()}/>

            </View>  
        );
    }
  };

  const styles ={
    viewLlistaFetaStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '10%'
    },
    viewStyle2: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '10%'
    },
    viewStyle: {
        backgroundColor: APP_COLORS.groc,
        width: '100%', 
        height: '100%'
    },
    textInputStyle:{
      height: 40,
      fontSize: 30,
      width: 200,
      marginTop: 20,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderRadius: 75
  },
  touchableStyle: {
    alignItems: 'center',
    padding: 10
  },
  viewllistaStyle: {
    flexDirection: 'row',
    marginTop: '15%',
    justifyContent: 'space-between'
  }
}