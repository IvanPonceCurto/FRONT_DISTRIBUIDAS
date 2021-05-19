import {Text,Button,theme} from "galio-framework"
import React, { useState } from "react"
import {View,StyleSheet} from "react-native"
import { argonTheme } from "../constants"
import {Modal} from "react-native"

class CustomModal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:this.props.visible
        }
        console.log("Props:"+this.props.visible)
        console.log("Estado"+this.state.visible)
    }
    changeState=(e)=>{
        e.preventDefault();
        this.setState({visible:false})
    }
    render(){
        const isVisible=this.state.visible
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Modal
                transparent
                visible={isVisible}
            >
                <View style={stylesSheet.modalFondo}>
                    <View style={stylesSheet.modalMostrar}>
                    <View style={{alignItems:"center",flex:1,padding:20,flexDirection:"row"}}>
                        <View>
                        <Text style={{textAlign:"center"}}>texto</Text>
                        </View>
                        <View style={{alignContent:"space-between",flex:1,flexDirection:"row"}}>
                        
                            <Button style={stylesSheet.botonSi,{width:100,height:30,borderRadius:40}}
                                onPress={this.changeState}
                            >SI</Button>
                        
                        
                            <Button style={stylesSheet.botonNo,{width:100,height:30,borderRadius:40}}>NO</Button>
                        
                        </View>
                    </View>
                    </View>
                </View>
                
            </Modal>
            </View>
        )
    }
}

const stylesSheet= StyleSheet.create({
    botonSi:{
        paddingLeft:10
    },
    botonNo:{
        paddingRight:10
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