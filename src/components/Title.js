import React from 'react';
import {Text, View } from 'react-native';
import {APP_COLORS} from "../constants/colors";

const Title = (props) => {
    const {textStyle,viewStyle} = styles;
    return(
        <View style = {viewStyle}>
            <Text style = {textStyle}> {props.titleText} </Text>
        </View>
    );
};
const styles ={
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 20,
    },
    textStyle:{
        color: APP_COLORS.burdeos,
        fontSize: 55,
        fontWeight: 'bold'
    }
}

export default Title;