import AsyncStorage from "@react-native-async-storage/async-storage";
import { Block, theme, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { Dimensions, View, Image, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import CardPaymentMethod from "../components/CardPaymentMethod";
import CardPaymentMethod from "../components/paymentsMethodFn";

const { width } = Dimensions.get("screen");
const { bringLength } = require("../services/mediosDePago.service");
const plusIcon = require("../assets/imgs/iconChico.png");

export default function MediosDePago({ navigation }) {
  const [listaTarjetas, setListaTarjetas] = useState([]);
  const [numeroCliente, setNumeroCliente] = useState("");
  const [cantTarj, setCantTarj] = useState();

  /*useEffect(() => {
    //traerTj(5,setListaTarjetas);
    fetchClientNumber(setNumeroCliente, setListaTarjetas, setCantTarj);
  }, [setCantTarj]),
    console.log("Lista: " + listaTarjetas);
  console.log("cant: " + cantTarj);*/
  return (
      <ScrollView>
        <Block style={styles.cardsContainer}>
          <CardPaymentMethod style={styles.card} horizontal={true}/>
        </Block> 
        <View
          style={{
            alignItems: "flex-end",
            position: "relative",
            bottom: 0,
            right: 0,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("InputPM");
            }}
            style={styles.addBtnContainer}
          >
            <Image source={plusIcon}></Image>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}

const fetchClientNumber = async (
  setNumeroCliente,
  setListaTarjetas,
  setCantTarj
) => {
  const nc = await AsyncStorage.getItem("idCliente");
  console.log("El numero de cliente es: " + JSON.stringify(nc));
  traerTj(nc, setListaTarjetas);
  bringLength(nc, setCantTarj);
  setNumeroCliente(nc);
};

const traerTj = (numeroCliente, setListaTarjetas) => {
  fetch(
    `http://192.168.0.229:3006/api/mediosdepago/allPaymentsMethods/` +
      numeroCliente,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  )
    .then((resultado) => {
      return resultado.json();
    })
    .then((res) => setListaTarjetas(res.result))
    .catch((err) => setListaTarjetas([]));
};

const styles = StyleSheet.create({
  addBtnContainer: {
    alignItems: "flex-end",
    marginTop: 30,
    marginRight: 10,
  },
  cardsContainer: {
    marginVertical: 50,
  },
  card: {
    marginHorizontal: 10,
  },
  title: {
    paddingLeft: 20,
    paddingTop: 10,
    marginTop: 20,
  },
});
