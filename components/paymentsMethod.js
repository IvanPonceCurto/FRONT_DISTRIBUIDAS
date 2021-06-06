import React, { useEffect, useState } from "react";
import { Text } from "galio-framework";
import { View, StyleSheet, Image, TouchableHighlightBase } from "react-native";
import CardPaymentMethod from "./CardPaymentMethod";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const plusIcon = require("../assets/imgs/iconChico.png");

const { fetchPaymentsMethod } = require("../services/mediosDePago.service");

//Screen que renderizo todo los medios de pago, preguntar por el tema del boton, y del futuro ScrollView.

class PaymentsMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      listaTarjetas: [],
    };
  }

  renderButton = () => {
    return (
      <View style={{alignItems:"flex-end",position:"relative",bottom:0,right:0}}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("InputPM")}
        style={{ alignItems: "flex-end"}}
      >
        <Image source={plusIcon}></Image>
      </TouchableOpacity>
    </View>
    );
  };

  listaTarjetas = async () => {
    const numeroCliente = await AsyncStorage.getItem("idCliente");
    const lista = await fetchPaymentsMethod(numeroCliente);
    console.log("La lista con la que setea el state es: "+lista)
    this.setState({listaTarjetas:lista})
    console.log("Lo que sale del state: "+this.state.listaTarjetas)
  };

  lista = () => {
    //console.log(await this.listaTarjetas(12345678))
    return [{ cardNumber: "****-****-****-9568" },{ cardNumber: "****-****-****-9568" },{ cardNumber: "****-****-****-9568" }];
  };
  turnObjectIntoCard = (listaTarjetas) => {
    var lista = [];
    var objeto = {};
    listaTarjetas.map((e) => {
      objeto = {
        cardNumber: e.cardNumber,
      };
      lista.push(objeto);
    });
    console.log("La lista es: " + lista);
    return lista;
  };

  render() {
    //console.log("El idCliente es: "+ await AsyncStorage.getAllKeys())
    //this.setState({listaTarjetas:this.listaTarjetas(await AsyncStorage.getItem(idCliente))})
    //const lista = this.listaTarjetas();
    return (
      <View>
        <Text h4 style={{ paddingLeft: 20, paddingTop: 10 }}>
          Add Payment Method
        </Text>
        {this.lista().map((e) => {
          return <CardPaymentMethod horizontal cardsObject={e} />;
        })}
        {this.renderButton()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {},
});
export default PaymentsMethod;
