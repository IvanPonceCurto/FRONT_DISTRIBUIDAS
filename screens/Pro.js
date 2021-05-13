import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking,ScrollView } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 
import {Card} from '../components/Card'
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
const { height, width } = Dimensions.get('screen');
const fecha = '20/05/2021'
const rematador = 'Ivan Ponce'
const idSubasta = 1234
const categoria = 'Platino'
const zapas = require("../assets/imgs/zapas.jpg")
/*#3483FA*/
export default class Pro extends React.Component {

  render() {
    return (
      
        <Block flex style={styles.catalogo}>
          <Block flex>
              <Block style={styles.container,{ backgroundColor:'#EEBB00'}}> 
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ width, marginTop: '25%' }}
                  >
                    <Block flex style={styles.catalogoCard}>
                      <Block style={styles.cardHeader}>
                        <Text size={20} style={{textAlign:'center',fontWeight:'bold',marginTop:10}}>Subasta Nro: {idSubasta}</Text>
                        <Text style = {{marginTop:15,marginLeft:20}}>Fecha: {fecha}</Text>
                        <Block row space="between">
                          <Text style = {{marginTop:10,marginLeft:20}}>Rematador: {rematador}</Text>
                          <Block style={styles.rectanguloCategoria}>
                            <Text size={12} color={argonTheme.COLORS.WHITE} bold>{categoria}</Text>
                          </Block>

                        </Block>
                      </Block>
                      <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                        <Block style={styles.divider} />
                      </Block>
                      <Block style={styles.cardBody}>
                        <Text bold size={16} style={styles.subastaActual}>Subastandose Actualmente</Text>
                        <Block style={styles.imageContainer}>
                            <Image
                                style={styles.imagen}
                                source={zapas}
                              />
                        </Block>
                      </Block>
                    </Block>
                </ScrollView>
              </Block>
          </Block>
        </Block>
       
    
    );
  }
}

const styles = StyleSheet.create({
  catalogo:{
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    flex:1
  },
  container: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
    
  },
  catalogoBackground: {
    width: width,
    height: height / 2
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },

  catalogoCard:{
    padding: 0,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 100,
    borderTopLeftRadius: 10,
    height:height,
    borderTopRightRadius: 10,
    backgroundColor: '#FFFFFF',
   
  },
  cardHeader:{  
      height: height/8,
      marginTop:0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor:'#FFFFFF',
   
     
      

  },
  rectanguloCategoria:{
    backgroundColor: '#15E18E',
    width:60,
    alignItems:'center',
    borderRadius:50,
    marginRight:30,
    height:20,
    marginTop:10
  
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#999595"
  },
  cardBody:{
    height:height,
    backgroundColor:'#FFFFFF'

  },
  subastaActual:{
    
    textAlign: 'center',
    marginBottom:20
  },
  imageContainer:{
    alignSelf:'center',
    width:300,
    height:150,
    backgroundColor:'#000000',
    borderRadius: 20,
    borderWidth:5,
    borderColor: '#3483FA'
  },
  imagen:{
    width:'100%',
    height:'100%',
    borderRadius:20

  }

});
