import React from 'react';
import { Pressable, View } from "react-native";
import {StyleSheet,Image,Text} from "react-native"
import PropTypes from "prop-types"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { withNavigation } from "@react-navigation/compat";
import { Block, Button } from "galio-framework";
import Modal from "react-native"

const visa=require("../assets/imgs/visa.png")
const masterCard=require("../assets/imgs/mastercard-logo.png")

class CargaCorrecta extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            botonMostrar:this.props.mostrar
        }
    }
    isVisaOrMaster=(cardIssuer,cardType,numeroTarjeta)=>{
        return(
            <View>
                <Image source={visa} style={{alignItems:'center',height:100,width:150}}></Image>
                <Text>{cardIssuer} {cardType} terminada en {numeroTarjeta}</Text>
            </View>
                
            
        )
    }
    render(){
        const {navigation} = this.props
        return(
            
            <View style={styles.flexboxContainer}>
                <Text style={{fontWeight:'bold',fontSize:30,color:"#3483FA",alignItems:'center',paddingLeft:30,paddingBottom:10}}>Felicitaciones, su tarjeta ha sido registrada!</Text>
                <View style={styles.flexboxContainer}>
                {this.isVisaOrMaster("Visa","Debito",this.props.numeroTarjeta)}
                </View>
                <View style={styles.flexboxContainer}>
                    <Button style={styles.Button} onPress={(e)=>{
                        navigation.navigate("Articles")
                    }}>Volver</Button>    
                </View>
                
            </View>
        )
    }

    
}

CargaCorrecta.propTypes={
    imagen: PropTypes.any,
    texto: PropTypes.string,
    botonVolver: PropTypes.object
}
export default CargaCorrecta;

const styles=StyleSheet.create({
    flexboxContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        paddingTop:100
    },
    containerImagen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:400,
        height:400
    },
    vistaPadre:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2
    },
    viewHijo:{
        margin: 20,
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
    },
    Button:{
        backgroundColor:"#3483FA"
    }
})
