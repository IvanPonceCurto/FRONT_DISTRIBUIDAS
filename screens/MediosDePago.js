import { Block, theme} from "galio-framework";
import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "../components";
import CardPaymentMethod from "../components/CardPaymentMethod";

const {width} = Dimensions.get("screen")

class MediosDePago extends React.Component {
    state = {
        aceptada: false,
        rechazada: false,
    };
    //REEVER ESTA PARTE DEL CODIGO PORQUE NO SIRVE SI TENGO MAS DE 2


    cambiarEstadoTarjeta = (estado) =>
        this.setState({
        [estado]: !this.state[estado],
    });

    renderCards = (item)=>{
        return (
            //contenedor generico
            <Block flex>
                <Block style={{paddingHorizontal: theme.SIZES.BASE}}>
                    <CardPaymentMethod></CardPaymentMethod>
                </Block>
            </Block>
        )
    }
    renderButton = () => {
        return (
            <Block flex>
                <Block align bottom right>
                    <TouchableOpacity>ACÁ</TouchableOpacity>
                </Block>
            </Block>
        )
     }
     render(){
         return(
             <Block>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderCards()}
                    {this.renderButton()}    
                </ScrollView>
             </Block>
         )
     }
     //Yo siempre tengo que tener un render principal, y otro render que cree
     //las otras cosas que yo necesito.
}
