import { withNavigation } from "@react-navigation/compat"
import { Block } from "galio-framework"
import {React} from "react"
import { ImageBackground } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { argonTheme } from "../constants"

const imagenVisa = require("../assets/imgs/visa.png")

class CargaTarjetasCorrecta extends React.Component{
    //Renderizar el cargado correcto de la tarjeta.

    state = {
        cardNumber: "",
        cardIssuer: ""
    }



    renderImage = () => {
        return(
            <Block flex>
            <Image source={imagenVisa}/>
            <Text>TARJETA DEBITO TERMINADA EN {this.state.cardNumber}</Text>
        </Block>
        )
        
    }

    renderText = () => {
        const {navigation} = this.props;
        return(
        <Block flex>
            <Text bold={true} h2 color={argonTheme.COLORS.BLUE} center>¡Su tarjeta ha sido vinculada con éxito!</Text>
            <Text center color={argonTheme.COLORS.BLACK}>En breve, luego de que la empresa la avale, la podrás utilizar como medio de pago</Text>
            <TouchableOpacity onPress={navigation.navigate("Home")}>VOLVER</TouchableOpacity>

        </Block>
        )

    }
    render(){
        return(
            <Block flex center>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderImage()}
                    {this.renderText()}
                </ScrollView>
            </Block>
        )
    }

}
export default CargaTarjetasCorrecta;