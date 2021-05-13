import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking,ScrollView, View } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 
import {Card} from '../components/Card'
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
const { height, width } = Dimensions.get('screen');


class Producto extends React.Component{
    render(){
        return(
            <Block style={{color:'#000000'}}></Block>
        )
    }
}

export default Producto