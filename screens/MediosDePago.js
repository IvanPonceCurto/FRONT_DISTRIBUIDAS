import AsyncStorage from "@react-native-async-storage/async-storage";
import { Block, theme, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { Dimensions, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CardPaymentMethod from "../components/CardPaymentMethod";

const { width } = Dimensions.get("screen");
const { fetchPaymentsMethod } = require("../services/mediosDePago.service");
const plusIcon = require("../assets/imgs/iconChico.png");

export default function MediosDePago({navigation}) {
  const [listaTarjetas, setListaTarjetas] = useState([]);
  const [numeroCliente, setNumeroCliente] = useState("");

  
  useEffect(()=>{fetchPaymentsMethod(5, setListaTarjetas)},[])

  //useEffect(()=>{fetchClientNumber(setNumeroCliente)})

  console.log("Lista: " + listaTarjetas);

  return (
    <View>
      <Text h4 style={{ paddingLeft: 20, paddingTop: 10 }}>
        Add Payment Method
      </Text>
      {listaTarjetas.map((e) => {
        var cardObject = JSON.stringify(e)
        console.log("CardObject "+cardObject)
        return <CardPaymentMethod horizontal cardsObject={cardObject} />;
      })}
      <View
      style={{
        alignItems: "flex-end",
        position: "relative",
        bottom: 0,
        right: 0,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("InputPM")}
        style={{ alignItems: "flex-end" }}
      >
        <Image source={plusIcon}></Image>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const fetchClientNumber = async (setNumeroCliente) => {
  const nc = await AsyncStorage.getItem("idCliente");
  console.log("El numero de cliente es: " + nc);
  setNumeroCliente(nc);
  return nc;
};

const renderButton = () => {
  return (
    <View
      style={{
        alignItems: "flex-end",
        position: "relative",
        bottom: 0,
        right: 0,
      }}
    >
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("InputPM")}
        style={{ alignItems: "flex-end" }}
      >
        <Image source={plusIcon}></Image>
      </TouchableOpacity>
    </View>
  );
};
