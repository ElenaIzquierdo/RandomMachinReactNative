import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {APP_COLORS} from "../constants/colors";

const DiceButton = () => {
    const {viewStyle, imageStyle, textStyle, touchableStyle} = styles;
    return(
        <View style = {viewStyle}>
            <TouchableOpacity onPress={()=>{alert("you clicked me")}} style = {touchableStyle}>
                <Image source={require('../images/dices.png')} style = {imageStyle}/>
            </TouchableOpacity>
        </View>
    );
};
const styles ={
    touchableStyle: {
        alignItems: 'center'
    },
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 20,
    },
    imageStyle: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: APP_COLORS.color_neutral,
        borderRadius: 75,
        overflow: "hidden",
        position: "absolute"
    },
    textStyle: {
        color: APP_COLORS.color_neutral,
        fontSize: 25,
        fontWeight: 'bold'
    }
}

export default DiceButton;