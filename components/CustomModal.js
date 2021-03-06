import {Text,Button,theme,Block} from "galio-framework"
import React from "react"
import {View,StyleSheet} from "react-native"
import { argonTheme } from "../constants"
import {Modal} from "react-native"
import {fetchDeleteMethod} from "../services/mediosDePago.service"


class CustomModal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:this.props.visible,
            cardNumber:this.props.cardNumber,
            añadirTarjeta:this.props.tarjeta,
            clientNumber: this.props.clientNumber
        }
    }
    changeState=(e)=>{
        e.preventDefault();
        this.setState({visible:false})
    }
    llamarDelete=(e,cardNumber,clientNumber)=>{
        e.preventDefault();
        console.log("XX - BORRA TARJETAS")
        fetchDeleteMethod(clientNumber,cardNumber)
        this.setState({visible:false})
        
    }

    

    render(){
        const {cardNumber,clientNumber} = this.props.route.params
        console.log(cardNumber,clientNumber)
        const {navigation} = this.props;
        return(
            <View style={{alignItems:"center"}}>
            <Modal 
                transparent
                visible={this.state.visible}
            >
                <Block flex style={stylesSheet.modalFondo}>
                    <Block center style={stylesSheet.modalMostrar}>
                    <Text style={{marginTop:30,fontSize:15,textAlign:'center'}}>¿Estás seguro de que querés borrar la tarjeta {cardNumber}?</Text>
                        <Block flex row style={{marginTop:30}}>
                            <Button style={stylesSheet.botonSi} onPress={e=>{this.llamarDelete(e,cardNumber,clientNumber);navigation.navigate("PM");console.log("si")}}>SI</Button>
                            <Button style={stylesSheet.botonNo} onPress={(e)=>{this.setState({visible:false});navigation.navigate("PM");;console.log("no")}}>NO</Button>
                    </Block>
                    </Block>
                </Block>
                
            </Modal>
            </View>
        )
    }
}

const stylesSheet= StyleSheet.create({
    botonSi:{
        backgroundColor:"#00BB2D",
        height:45,
        width:130,
        borderRadius:10
    },
    botonNo:{
        backgroundColor:"#EA0000",
        height:45,
        width:130,
        borderRadius:10
    },
    headerModal:{
        width: '100%',
        height: 40,
        paddingTop:"40%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalMostrar:{
        width:'75%',
        height:'25%',
        backgroundColor:"white",
        borderRadius:40,
        elevation:20
    },
    modalFondo:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.5)",
        justifyContent:"center",
        alignItems:"center",
    },
    titulo:{
        paddingBottom: theme.SIZES.BASE,
        paddingHorizontal: theme.SIZES.BASE * 2,
        marginTop: 22,
        color: argonTheme.COLORS.HEADER
    },
    pickerContainer:{
        alignSelf:'center',
       
        marginTop:30,
        width:350,
        height:50,
        borderRadius:2,
     
        shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
      shadowOpacity: 0.5,
      elevation: 1,

    },
    picker:{
        width:350,
        height:44,
        borderRadius:50
    
    },input: {
        borderRadius: 4,
        borderColor: argonTheme.COLORS.BORDER,
        height: 44,
        backgroundColor: '#FFFFFF'
      },
      success: {
        borderColor: argonTheme.COLORS.INPUT_SUCCESS,
      },
      error: {
        borderColor: argonTheme.COLORS.INPUT_ERROR,
      },
      shadow: {
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.05,
        elevation: 2,
      },vistaPadre:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
        
    },
    viewHijo:{
        justifyContent:"center",
        alignItems:"center",
        margin: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    borrarCard:{
        backgroundColor:"#EF280F"
    },
    noBorrarCard:{
        backgroundColor:"#6DC36D"
    },centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        shadowColor:"#000",
        borderRadius:20,
        backgroundColor:"white"
      }
})

export default CustomModal;