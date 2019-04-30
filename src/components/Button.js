import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors"

const Button = (props) => {
    return (
        <View style = {styles.container}>
           <TouchableOpacity onPress= {props.path}>
              <Text style = {styles.button}>
                 {props.buttonText}
              </Text>
           </TouchableOpacity>
        </View>
     )
  };
  
  const styles = {
     container: {
        flex: 1,
        alignItems: 'center',
     },
     button: {
        padding: 8,
        textAlign:'center',
        backgroundColor: APP_COLORS.lila,
        color: APP_COLORS.groc,
        fontWeight: 'bold',
        borderRadius: 10,
        fontSize: 30,
        height: 60,
        width: 300,
         marginTop: 15,
         overflow: "hidden",
     }
  }
export default Button;