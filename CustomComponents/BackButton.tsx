import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export type Props = {
    back:Function,
}

const BackButton = (props:Props) =>{
    return(
        <>
        <TouchableOpacity 
        style={{marginLeft:10,marginTop:5, justifyContent:'center',alignItems:'center',backgroundColor:'#009432',height:50,width:50,borderRadius:30}}
        onPress={props.back} >
          <Icon name='chevron-left' size={30} color='#ffffff' />
        </TouchableOpacity>

        </>

    );
}


export default BackButton;