import React, { Children } from 'react'
import PropTypes from 'prop-types'
import {withNavigation} from '@react-navigation/compat'
import {StyleSheet, View, Dimensions, Pressable, Image, TouchableWithoutFeedback, Modal, TouchableOpacityBase} from 'react-native'
import {Block, Button, Text, theme} from 'galio-framework'
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import imagen from '../assets/imgs/visa.png'
import MyIcon from '../assets/nucleo icons/x-circle.svg'
import Icon from '.'
import CustomModal from "../components/CustomModal"

const Menu = require("../assets/imgs/visa.png");
const master = require ("../assets/imgs/mastercard-logo.png")
const visaDigits = "45176506"
//Objetivo crear componente Card que nos permita 

class CardPaymentMethod extends React.Component{


    constructor(props){
      super(props);
      this.state={
        cardsList:this.props.cardsList,
        uniqueKey:0,
        isVisible:false
      }
    }
    sumarKey=()=>{
      this.state.uniqueKey++;
    }

    renderImagenCard=(cardNumber,imgStyles,imgContainer)=>{
      if(cardNumber.substring(0,8)===visaDigits){
        return(<Block flex style={imgContainer}> 
            <Image source={Menu} style={imgStyles}></Image>

        </Block>)
      }
      return(<Block flex  style={imgContainer}> 
        <Image source={master} style={imgStyles}></Image>

    </Block>)
    }
    
    renderCustomizedCards=(item,navigation)=>{
      if(item===this.state.cardsList.length){
        return(
          <Button onPress={()=>navigation.navigate("Home")}>ADD</Button>
        )
      }
      
    }
    
    
    renderCards= () => {
      const { navigation,horizontal, full, style, imageStyle } = this.props;
    
      const imageStyles = [
        full ? styles.fullImage : styles.horizontalImage,
        imageStyle
      ];
      const cardContainer = [styles.card, styles.shadow, style];
      const imgContainer = [styles.centrado,styles.imageContainer,
        horizontal ? styles.horizontalStyles : styles.verticalStyles,
        styles.shadow
    ];
    
    return(
      this.state.cardsList.map((cardElement)=>{
        return(
          
          <Block row={horizontal} card flex style={cardContainer} key={this.sumarKey()}>
            {this.renderImagenCard(cardElement.cardNumber,imageStyles,imgContainer)}
            <Block  flex space="between" style={styles.cardDescription}>
              <Text size={14} style={styles.cardTitle}>{cardElement.cardNumber}</Text>
              {/*<Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text>*/}
              {/*<Button onPress={props=>{<CustomModal {...props} visible={true}/>;console.log("e")}} style={{borderRadius:40}}>BORRAR</Button>*/}
              <Button onPress={()=>{this.setState({isVisible:true});console.log("e")}}>borrar</Button>
            </Block>
          </Block>
          
        )
      })
    )
    }
    
    renderCosaLoca=()=>{
      const isVisible=this.state.isVisible;
      if(isVisible){
        console.log("Llegué"+isVisible)
        return(
          <CustomModal visible={isVisible}></CustomModal>
        )
      }
      

    }
    render(){
      return(
        <Block flex>
          {this.renderCards()}
          {this.renderCosaLoca()}
          {this.renderCustomizedCards(this.state.uniqueKey,this.props.navigation)}
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