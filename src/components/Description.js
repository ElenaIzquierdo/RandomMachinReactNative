import React from 'react';
import { View, TextInput, Text}  from 'react-native';
import {APP_COLORS} from "../constants/colors"

const Description = (props) => {
    const {textStyle } = styles;
    const {style}=props;
    return (
        <Text style = {[textStyle, style]}>{props.textExpl}</Text>
    );

};
const styles ={
    textStyle:{
        color:APP_COLORS.burdeos ,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5%',
    }
}
export default Description;