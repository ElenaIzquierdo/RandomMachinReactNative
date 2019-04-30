import React from 'react';
import { View, TextInput}  from 'react-native';
import Description from './Description';
import {APP_COLORS} from "../constants/colors";
import { Ionicons } from '@expo/vector-icons';

const Formulari = (props) => {
    const {viewStyle, textInputStyle, viewllistaStyle} = styles;
    const { value, onChangeText } = props
    return (
        <View style = {[viewStyle, {height: props.altura}]}>
            <Description textExpl = {props.textExplicatiu}/>
            <View style = {viewllistaStyle}>
                <TextInput underlineColorAndroid={APP_COLORS.lila} style = {textInputStyle}/>
                <Ionicons name="md-add-circle-outline" size={33} color={APP_COLORS.lila}/>
            </View>
            
        </View>
    );

};
const styles ={
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%'
    },
    textInputStyle:{
        height: 40,
        fontSize: 30,
        width: 200,
        marginTop: 20,
    },
    viewllistaStyle: {
        flexDirection: 'row',
        marginTop: '15%',
        justifyContent: 'space-between'
    }
}
export default Formulari;