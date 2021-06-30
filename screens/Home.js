import React,{useEffect, useState} from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../components';
import { useIsFocused } from "@react-navigation/native";

const { width } = Dimensions.get('screen');
const{getSubastasActivas} = require("../services/subasta.service")



export default function Home() {
  const[subastasActivas,setsubastasActivas]=useState([])
  const isFocused = useIsFocused();

  useEffect(()=>{
      getSubastasActivas(setsubastasActivas);
  },[isFocused])
  
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

