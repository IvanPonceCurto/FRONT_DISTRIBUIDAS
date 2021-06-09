import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {StyleSheet, Image} from 'react-native'
import {Block, Text, theme} from 'galio-framework'
import { TouchableOpacity } from 'react-native-gesture-handler'



import CustomModal from "../components/CustomModal"

const Menu = require("../assets/imgs/visa.png");
const master = require ("../assets/imgs/mastercard-logo.png")
const borrarIcon = require("../assets/imgs/Vector.png")
const validateIcon = require("../assets/imgs/validate.png")
const {fetchDeleteMethod} = require("../services/mediosDePago.service")

const visaDigits = "4"
//Objetivo crear componente Card que nos permita 

class CardPaymentMethod extends React.Component{


    constructor(props){
      super(props);
      this.state={
        cardsObject:JSON.parse(this.props.cardsObject),
        uniqueKey:0,
        isVisible:false,
        clientNumber: this.props.clientNumber
      }
    }

    changeState=(e)=>{
      //.preventDefault();
      this.setState({isVisible:true})
      console.log("PASO POR ACA")
    }

    renderButtonOnValidation=(isValid)=>{
      if(!isValid){
        return(
          <TouchableOpacity disabled={true} style={{alignItems:"flex-end",paddingTop:0}}>
           <Image style={{alignItems:'flex-end'}}source={validateIcon}></Image>
         </TouchableOpacity>
         )
      }
      return(
        <TouchableOpacity onPress={this.changeState} style={{alignItems:'flex-end',paddingBottom:20}}>
                <Image style={{alignItems:'flex-end'}} source={borrarIcon}></Image>
      </TouchableOpacity>
      )
      

   
  }

    renderImagenCard=(cardNumber,imgStyles,imgContainer)=>{
      console.log("Numero de tarjeta"+cardNumber)
      if(cardNumber.substring(0,1)===visaDigits){
        return(
        <Block flex center row={"horizontal"} style={{maxHeight:50,maxWidth:100,alignContent:'center'}}> 
            <Image source={Menu} style={imgStyles,{height:50,width:100,alignItems:'center'}}></Image>

        </Block>)
      }
      return(<Block flex center row={"horizontal"} style={{maxHeight:50,maxWidth:100,alignContent:'center'}}> 
        <Image source={master} style={imgStyles,{height:50,width:100,alignItems:'center'}}></Image>

    </Block>)
    }
    
    
    
    renderCards= () => {
      const { navigation,horizontal, full, style, imageStyle } = this.props;
    
      const imageStyles = [ styles.centrado,
        full ? styles.fullImage : styles.horizontalImage,
        imageStyle
      ];
      const cardContainer = [styles.card, styles.shadow,styles.group, style];
      const imgContainer = [styles.centrado,styles.imageContainer,
        horizontal ? styles.horizontalStyles : styles.verticalStyles,
        styles.shadow
    ];
    
    
    return(
          <Block row={horizontal} card  height={80} style={cardContainer} key={this.state.cardsObject.cardNumber}>
            <Block row={horizontal} height={50} alignItems={"center"} paddingLeft={20}>
              {this.renderImagenCard(this.state.cardsObject.cardNumber,imageStyles,imgContainer)}
            </Block>
            
            <Block row={horizontal}  height={50} flex alignItems={"center"} style={styles.cardDescription,{paddingLeft:50,alignItems:"center"}}>
              <Text size={20} center  style={styles.cardTitle}>{this.state.cardsObject.cardNumber}</Text>
              {/*<Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text>*/}
              {/*<Button onPress={props=>{<CustomModal {...props} visible={true}/>;console.log("e")}} style={{borderRadius:40}}>BORRAR</Button>*/}
            </Block> 
            <Block row={horizontal} height={10} alignItems={"center"} >
            {this.renderButtonOnValidation(this.state.cardsObject.isValidated)
            //con este bool ponemos el otro iconito o no.
            }
            
            </Block>
            
            

          </Block>
          
        )
    }
    
    renderCosaLoca=()=>{
      const isVisible=this.state.isVisible;
      const cardNumber=this.state.cardsObject.cardNumber
      const toDecir=true;
      if(isVisible){
        return(
          <CustomModal visible={isVisible} cardNumber={cardNumber} decir={toDecir} clientNumber={this.state.clientNumber}>
          </CustomModal>
          
        )
      }
      

    }
    render(){ 
      return(
        <Block>
          {this.renderCards()}
          {this.renderCosaLoca()}
        </Block>
        
        
        
      )    
    
    }
}

//IMPORTANTE:
//Según esto, lo que me está diciendo es que no puedo actualizar una componente desde un body de otro componente.
CardPaymentMethod.propTypes = {
    imagen: PropTypes.any,
    cardItem: PropTypes.object,
    horizontal: PropTypes.bool,
    icon: PropTypes.any, 
    boton: PropTypes.any   
}

const styles = StyleSheet.create({
  group:{
    paddingTop:theme.SIZES.BASE
  },
  botonSi:{
    backgroundColor:"green"
  },botonNo:{
    backgroundColor:"red"
  },
    centrado:{
      alignItems:"center"
    },
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
      paddingHorizontal: 10
    },
    card: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE,
        borderWidth: 2,
        minHeight: 50,
        marginBottom: 15
      },
      cardTitle: {
        flex: 1,
        flexWrap: 'wrap',
        paddingLeft:30,
        paddingBottom: 6,
        alignItems: 'flex-end'
      },
      cardDescription: {
        padding: theme.SIZES.BASE / 2
      },
      imageContainer: {
        borderRadius: 3,
        elevation: 1,
        overflow: 'hidden',
        alignItems:'center'
      },
      image: {
         borderRadius: 3,
      },
      horizontalImage: {
        height: 100,
        width:200,
      },
      horizontalStyles: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      verticalStyles: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      },
      fullImage: {
        height: 215
      },
      shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
      },
      button:{
        alignItems: "flex-end",
        padding: 10,
        backgroundColor:"#DDDDDD"
      },
      vistaPadre:{

      },
      viewHijo:{

      },
      borrarCard:{
          backgroundColor:"#EF280F"
      },
      noBorrarCard:{
          backgroundColor:"#6DC36D"
      },
      buttonCard:{
        alignItems:'flex-start',
        padding:10
      }
});

export default CardPaymentMethod;
//De esta manera yo defino que tipo de inputs recibirán esos componentes.