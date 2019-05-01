import React from 'react';
import {View, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Count1Screen extends React.Component {
    constructor(props) {
        super(props)  
    }
    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
        Actions.result({llista: this.props.llista})
        }, 1000);
    }
    render() {
        const {viewStyle} = styles;
        return (
            <View style = {viewStyle}>
              <Text>Esperant resultat...</Text>
              <Text>1</Text>
            </View>   
        );
    }
  };

  const styles ={
    viewStyle: {
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
}