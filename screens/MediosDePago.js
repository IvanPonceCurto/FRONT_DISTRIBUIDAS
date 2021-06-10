import AsyncStorage from "@react-native-async-storage/async-storage";
import { Block, theme, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { Dimensions, View, Image, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CardPaymentMethod from "../components/CardPaymentMethod";

const { width } = Dimensions.get("screen");
const { fetchPaymentsMethod } = require("../services/mediosDePago.service");
const plusIcon = require("../assets/imgs/iconChico.png");

export default function MediosDePago({ navigation }) {
  const [listaTarjetas, setListaTarjetas] = useState([]);
  const [numeroCliente, setNumeroCliente] = useState("");

  useEffect(() => {
    fetchPaymentsMethod(5, setListaTarjetas);
  }, [setListaTarjetas]),
    console.log("Lista: " + listaTarjetas);

  return (
    <ScrollView>
      <Block style={styles.cardsContainer}>
        {listaTarjetas.map((e) => {
          console.log(e);
          var cardObject = JSON.stringify(e);
          return (
            <CardPaymentMethod
              style={styles.card}
              key={e.cardNumber}
              horizontal
              cardsObject={cardObject}
              clientNumber={5}
            />
          );
        })}
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
          onPress={() => navigation.navigate("InputPM")}
          style={styles.addBtnContainer}
        >
          <Image source={plusIcon}></Image>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
