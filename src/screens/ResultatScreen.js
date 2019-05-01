import React from 'react';
import {APP_COLORS} from "../constants/colors";
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from "../components/Button";



export default class Inici extends React.Component {
  constructor(props) {
    super(props)  
  }
  onPress = () => {
    Actions.llista();
  }
  pintarLlista(){
    const llista_copia = this.props.llista;
    var s = llista_copia.length
    var num_random = Math.floor(Math.random() * s);
    return(
      <Text style = {styles.textStyle2}>{llista_copia[num_random]}</Text>
      
    );
  }
    render() {
        const {viewStyle,textStyle} = styles;
        return (
            <View style = {viewStyle}>
              <Text style={textStyle}>I la opció guanyadora és...</Text>
              {this.pintarLlista()}
              <Button style={styles.buttonstyle} buttonText = {'OK'} path = {() => Actions.llista()}/>
            </View>   
        );
    }
  };

  const styles ={
    buttonstyle: {
      marginTop:'10%',
    },
    viewStyle: {
        backgroundColor: APP_COLORS.taronja,
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color:APP_COLORS.groc,
        fontSize: 30,
        fontWeight: 'bold',
    },
    textStyle2: {
      color:APP_COLORS.groc,
      fontSize: 50,
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