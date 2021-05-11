import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { RadioButton } from 'react-native-paper';
import { Input } from "../components";
import { Button, Text, theme } from "galio-framework";
import argonTheme from "../constants/Theme";
import { Formik } from 'formik';


const { width } = Dimensions.get("screen");

const Onboarding = (props) => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState('M');
  const [emptyFields, setEmptyFields] = useState(false);
  const [isValidFechaNacimiento, setIsValidFechaNacimiento] = useState(true);

  const { navigation } = props;

  const submitHandler = () => {
    setEmptyFields(false);
    setIsValidFechaNacimiento(true);
    const formInputs = [nombre, apellido, telefono, email, fechaNacimiento, dni, genero]
    for (const input of formInputs) {
      if (input === '') {
        setEmptyFields(true)
        return
      }
    }
    if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(fechaNacimiento) == false) {
      setIsValidFechaNacimiento(false);
      return
    }
    navigateToFinished();
  }

  const navigateToFinished = () => {
    navigation.navigate("Registro Finalizado");
  }

  
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Solicitar cuenta</Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            autoCapitalize="sentences"
            required
            placeholder="Nombre"
            onChangeText={text => setNombre(text)}
          />
          <Input
            autoCapitalize="sentences"
            required
            placeholder="Apellido"
            onChangeText={text => setApellido(text)}
          />
          <Input
            keyboardType="decimal-pad"
            required
            placeholder="Teléfono"
            onChangeText={text => setTelefono(text)}
          />
          <Input
            required
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
          <Input
            required
            placeholder="Fecha de nacimiento"
            onChangeText={text => setFechaNacimiento(text)}
          />
          {!isValidFechaNacimiento && <Text style={styles.error}>
            Fecha inválida (dd/mm/yyyy) 
          </Text>}
          <Input
            keyboardType="decimal-pad"
            required
            placeholder="DNI"
            onChangeText={text => setDni(text)}
          />
          <View style={styles.radioButtonContainer}>
            <View style={styles.radioButton}>
              <RadioButton
                value="M"
                color="#EEBB00"
                status={genero === 'M' ? 'checked' : 'unchecked'}
                onPress={() => setGenero('M')}
              />
              <Text>Masculino</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton
                value="F"
                color="#EEBB00"
                status={genero === 'F' ? 'checked' : 'unchecked'}
                onPress={() => setGenero('F')}
              />
              <Text>Femenino</Text>
            </View>
          </View>
          <Button
            style={styles.button}
            color={argonTheme.COLORS.BLUE}
            onPress={submitHandler}
            textStyle={{ color: argonTheme.COLORS.WHITE }}
          >
            Solicitar
          </Button>
          {emptyFields && <Text style={styles.error}>¡Todos los campos son obligatorios!</Text>}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '10%',
    width: width * 0.7
  },
  subtitle: {
    fontSize: 20,
    color: '#3483FA',
    marginTop: '5%',
    fontWeight: 'bold'
  },
  inputIcons: {
    marginRight: 12
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5%'
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },
  button: {
    width: width - theme.SIZES.BASE * 12,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: '1%',
  },
  error: {
    color: 'red',
    marginBottom: 10
  }
});


export default Onboarding;
