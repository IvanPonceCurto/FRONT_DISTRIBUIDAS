import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Image
} from "react-native";
import icon from '../assets/confirm.png'
import { Button, Text } from "galio-framework";
import argonTheme from "../constants/Theme";
import { StackActions } from '@react-navigation/native';


const { width } = Dimensions.get("screen");

const RegistroFinalizado = (props) => {

  const { navigation } = props;

  const resetStack = () => {
    const popAction = StackActions.pop(2);
    navigation.dispatch(popAction);
  }

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageTitle}>¡Enviado!</Text>
        <Image
          style={styles.confirmImage}
          source={icon}
        />
        <Text style={styles.message}>
          Tu articulo fue enviado con éxito.
          Te enviamos una confirmación
          por correo electrónico
          </Text>
      </View>
      <Button
        style={styles.button}
        onPress={() => resetStack()}
      >
        Volver
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
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#3483FA',
  }
});


export default RegistroFinalizado;
