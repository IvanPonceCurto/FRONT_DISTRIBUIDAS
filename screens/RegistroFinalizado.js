import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from "react-native";
import icon from '../assets/confirm.png'
import { RadioButton } from 'react-native-paper';
import { Input } from "../components";
import { Button, Text, theme } from "galio-framework";
import argonTheme from "../constants/Theme";


const { width } = Dimensions.get("screen");

const RegistroFinalizado = (props) => {

  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Solicitar cuenta</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageTitle}>¡Tu cuenta ha sido solicitada con éxito!</Text>
        <Image
          style={styles.confirmImage}
          source={icon}
        />
        <Text style={styles.message}>En breve recibirás un correo electrónico con los pasos a seguir para activar tu cuenta.</Text>
      </View>
      <Button
        style={styles.button}
        color={argonTheme.COLORS.BLUE}
        textStyle={{ color: argonTheme.COLORS.WHITE }}
        onPress={() => navigation.navigate("Onboarding")}
      >
        Solicitar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '5%',
    backgroundColor: '#EEBB00',
    width: '100%'
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  messageContainer: {
    marginVertical: '15%',
    alignItems: 'center',
    marginHorizontal: '5%'
  },
  confirmImage: {
    width: 150,
    height: 150,
  },
  messageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0084AE',
    textAlign: 'center',
    marginBottom: 50
  },
  message: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginTop: 40
  }
});


export default RegistroFinalizado;
