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
            <View alignItems={"center"}>
                <Image source={visa} style={{alignItems:'center',height:100,width:150}}></Image>
                <Text>{cardIssuer} {cardType} terminada en {numeroTarjeta}</Text>
            </View>
                
            
        )
    }
    render(){
        const {navigation} = this.props
        return(
            <View>
            <Text style={{fontWeight:'bold',fontSize:30,color:"#0084AE",textAlign:'center',paddingLeft:25,marginVertical:20}}>¡Tu tarjeta ha sido vinculada con éxito!</Text>
                <View style={styles.flexboxContainer}>
                {console.log(this.props.route.params)}
                {this.isVisaOrMaster("Visa","Debito",this.props.route.params.cardNumber)}
                </View>
                <View alignItems={"center"}  paddingTop={100}>
                    <View alignItems={"center"}>
                        <Text style={{marginVertical: 30, fontSize: 15, textAlign: 'center'}} >En breve, luego de que la empresa la avale, la podrás utilizar como medio de pago</Text>
                    </View>
                
                    <Button style={styles.Button} onPress={(e)=>{
                        navigation.navigate("PM")
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
export default CargaCorrecta;