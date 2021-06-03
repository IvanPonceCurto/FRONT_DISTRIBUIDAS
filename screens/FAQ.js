import { View } from 'native-base'
import React from 'react'
import CustomModal from '../components/CustomModal'
import {StyleSheet,Image,Text,TouchableWithoutFeedback, Dimensions} from 'react-native'
import { Block, Button, Card, theme } from 'galio-framework'
import CardPaymentMethod from '../components/CardPaymentMethod'
import { ScrollView } from 'react-native-gesture-handler'




const imagenDinero = require("../assets/imgs/guitaIconoHelp.png")
const imagenSeguridad= require("../assets/imgs/candado.png")
const imagenEliminarTarjeta = require("../assets/imgs/borrarCards.png")
const imagenAgregarTarjeta  = require("../assets/imgs/addTarjIcon.png")
const {width} = Dimensions.get("screen")

const listaPreguntas = [
    {pregunta:"¿Cómo subasto por un producto?",
    imagen: imagenDinero},
    {pregunta:"¿Está mi información segura en la app?",imagen:imagenSeguridad},
    {pregunta:"¿Cómo elimino mis cuentas?",imagen:imagenEliminarTarjeta},
    {pregunta:"¿Cómo asocio mis cuentas?",imagen:imagenAgregarTarjeta}
]
const contextoModal = React.createContext();

class FAQ extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            visible:false
        }
    }
    modal=()=>{
        if(this.state.visible){
            return(
                <CustomModal visible={this.state.visible} decir={true}/>
            )
        }
        
    }
    //Dentro del contextProvider metemos el codigo que necesita esa informacion.
    renderModal=(propVisible)=>{
        this.setState({visible:!this.state.visible})    
    }

    
    renderCardHelp=()=>{
        return(
            <contextoModal.Provider value={this.state.visible}>
                {
                    listaPreguntas.map((e)=>{
            return(
                <TouchableWithoutFeedback onPress={visible => 
                <contextoModal.Consumer>
                    {this.renderModal(visible)}
                </contextoModal.Consumer>
                }>
                <Block row={"horizontal"} card flex style={estilos.card,estilos.shadow,estilos.group,{paddingLeft:10}}>
                        <Block flex center row={"horizontal"}  style={{maxHeight:50,maxWidth:100,alignContent:'center'}}>
                            <Image  source={e.imagen} style={{height:100,width:100,alignContent:'center'}} /> 
                        </Block>
                <Block flex row={"horizontal"} space="between" >
                    <Block>
                        <Text center style={estilos.cardTitle}>{e.pregunta}</Text>
                    </Block>
                </Block>
                </Block>
                </TouchableWithoutFeedback>
            )
        })
                }
            </contextoModal.Provider>
            )
}


    render(){
        return(
            <Block flex center style={{width:width}}>
                {this.renderCardHelp()}
                {this.modal()}
            </Block>
        )
    }
}
export default FAQ;

const estilos = StyleSheet.create({
    group:{
        paddingTop:theme.SIZES.BASE
    },
    cardTitle:{
        flex:1,
        flexWrap:'wrap',
        paddingLeft:30,
        paddingTop:50,
        alignItems:'flex-end',
        textAlign: 'center',
        fontSize:15
    },
    card:{
    shadowColor: "#F8F9FE",
    shadowOffset: {
	    width: 1,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },card: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE,
        borderWidth: 0,
        minHeight: 114,
        marginBottom: 16
      },shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
      }
})