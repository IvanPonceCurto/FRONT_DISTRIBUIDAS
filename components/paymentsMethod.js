import React from 'react'
import { Block, Button, Card, Text } from "galio-framework"
import { View,StyleSheet,Image, TouchableOpacityBase} from "react-native"
import CardPaymentMethod from "./CardPaymentMethod"
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'


const plusIcon = require("../assets/imgs/iconChico.png")
const validateIcon = require("../assets/imgs/validate.png")

//Screen que renderizo todo los medios de pago, preguntar por el tema del boton, y del futuro ScrollView.

class PaymentsMethod extends React.Component{
   constructor(props){
    super(props)
    this.state={
        contador:0
    }
   } 

   renderButton=()=>{
       return(
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("InputPM")} style={{alignItems:"flex-end",paddingTop:150}}>
            <Image source={plusIcon}></Image>
        </TouchableOpacity>
       )
   }

  
   
   render(){
       return(
           <View>
            <Text h4 style={{paddingLeft:20,paddingTop:10}}>Add Payment Method</Text>
               {this.props.lista.map((e)=>{
                return(
                <CardPaymentMethod horizontal cardsObject={e}/>
            )})}
            {this.renderButton()}
           </View>
        )
   }
}
const styles=StyleSheet.create({
    cardContainer:{

    }
})
export default PaymentsMethod;