import React,{useEffect, useState} from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../components';

const { width } = Dimensions.get('screen');
const zapas = require("../assets/imgs/zapas.jpg")
const auto = require("../assets/imgs/ferrari.jpg")
const reloj = require("../assets/imgs/reloj.jpg")
const reloj2 = require("../assets/imgs/reloj2.jpg")
const reloj3 = require("../assets/imgs/reloj3.jpg")
const wanchope = require("../assets/imgs/wanchope.jpg")
const {getFotosByProducto,createFoto} = require("../services/foto.service");
const{getSubastasActivas} = require("../services/subasta.service")
const {getPersonaById} = require('../services/persona.service');


//COSAS A HACER EN LA PANTALLA:
//falta agregar fecha vencimiento

export default function Home() {
  const[subastasActivas,setsubastasActivas]=useState([])

  useEffect(()=>{
      getSubastasActivas(setsubastasActivas);
  },[])
  
    return (
      <Block flex center style={styles.home}>
      
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block>
        
    
      
         
          {subastasActivas.map(subasta =>{
              
              return <Card key={subasta.idSubasta} item={subasta} horizontal/>

          })}
         
        </Block>
      </ScrollView>
      </Block>
    );
  }

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  dropDownContainer:{
    marginBottom:10
  }
  
});

