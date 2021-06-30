import { Block,Text,Button,theme} from "galio-framework"
import React, {useState } from "react"
import { View,StyleSheet, Dimensions, Image,Animated} from "react-native"
import {Picker} from '@react-native-picker/picker'
import {Input} from "."
import { argonTheme } from "../constants"
import CustomModal from "../components/CustomModal"
import { TouchableOpacity } from "react-native-gesture-handler"

const addTarjeta=require("../assets/imgs/addTarjIcon.png")

const ancho= Dimensions.get("screen").height

const listaPaises=[
    {
        pais:"Argentina",
        icon:"holis",
        key:"0"
    },{
        pais:"Brasil",
        icon:"holis",
        key:"1"
    },{
        pais:"Chile",
        icon:"holis",
        key:"2"
    },{
        pais:"Peru",
        icon:"holis",
        key:"3"
    }
]

class CustomizedPicker extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedValue:"Argentina",
            listaPaisesRenderizar:this.props.listaPaises
        }
    }
    
    render(){
        return(
            <Block flex alignItems={"center"}>
                <Picker
                    style={stylesSheet.picker}
                    selectedValue={this.state.selectedValue}
                    onValueChange={(item)=>{this.setState({selectedValue:item})}}
                >
                    {
                        this.state.listaPaisesRenderizar.map((elem)=>{
                            return <Picker.Item label={elem.pais} value={elem.pais} key={elem.key}></Picker.Item>
                        })
                    }
                </Picker>
            </Block>
        )
    }
}

class InputPM extends React.Component{
    

    
    state={
        cardNumber:"",
        expiryDate:"",
        CVV:"",
        issuerCountry:"",
        selectedValue:"Argentina",
        estadoModal:false
    }


    renderInput=()=>{
        const inputStyles = [
            stylesSheet.input,stylesSheet.shadow,
            {...this.props.style}
          ];
        return(
            <View>
            
                <Block style={{paddingHorizontal:theme.SIZES.BASE}}>

                    <Input right
                    placeholder="Numero de tarjeta"
                    style={{
                        borderRadius:4
                    }}
                    iconContent={<Block/>}
                    onChangeText={(texto)=>{this.setState({cardNumber:texto});}}
                    />
                    
                    <Input right
                    placeholder="Exp.Date"
                    iconContent={<Block/>}
                    onChangeText={(texto)=>{this.setState({expiryDate:texto})}}
                    />
                    <Input right
                    placeholder="CVV"
                    iconContent={<Block/>}
                    onChangeText={(texto)=>{this.setState({CVV:texto})}}
                    />
                    
                    
                    <Block style={inputStyles}>
                        <CustomizedPicker listaPaises={listaPaises}></CustomizedPicker>
                    
                    </Block>
                    
                
                </Block>
            </View>
        )
    }
    sendData=()=>{
        //TODO 
        if(this.state.cardNumber.length===8){
            if(this.state.expiryDate.length===4){
                if(this.state.CVV.length===3){
                    console.log("Aca llego");
                    //this.setState({estadoModal:true})
                    this.props.navigation.navigate("CargaCorrecta",{cardNumber:this.state.cardNumber});
                }
            }
        }
    }
    eliminarCard=(e)=>{
        e.preventDefault();
        this.setState({estadoModal:false})
    }
    
    renderLoadButton= () => {
        return(
        <View style={{alignItems:"flex-end",bottom:0,right:1,marginBottom:ancho-50}}>
        <TouchableOpacity  onPress={()=>this.sendData()} >
        <Image source={addTarjeta}></Image> 
    </TouchableOpacity>
    </View>)
        
        
    }
    renderModalOnUpdate=()=>{
        const estadoModal=this.state.estadoModal;
        const agregarTarjeta="¿Estás seguro que querés agregar esta tarjeta?"
        if(estadoModal){
            return(
                <CustomModal visible={estadoModal} decir={false} cardNumber={1234} hijo={
                        
                    <View style={{alignItems:"center",flex:1,padding:20,flexDirection:"row"}}>
                        <View>
                        <Text style={{textAlign:"center"}}>{agregarTarjeta}</Text>
                        </View>
                        <View style={{alignContent:"space-between",flex:1,flexDirection:"row"}}>
                        
                            <Button style={stylesSheet.botonSi,{width:100,height:30,borderRadius:40}}
                                onPress={this.eliminarCard}
                            >SI</Button>
                        
                        
                            <Button style={stylesSheet.botonNo,{width:100,height:30,borderRadius:40}}>NO</Button>
                        
                        </View>
                    </View>
                    
                }>
                </CustomModal>
            )
        }
    }
    render(){
        return(
            <Block>
                {this.renderInput()}
                {this.renderLoadButton()}
                {this.renderModalOnUpdate()}
                
            </Block>
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
        color: "black"
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
        width:370,
        height:44,
        borderRadius:50,
        paddingLeft:10
    
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
      }
})
export default InputPM;

//Pasar todo a functionComponent y validar los inputs contra el regex que se hace facilongo.

