import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Icon } from "../components";
import { Button, Text, theme } from "galio-framework";
import argonTheme from "../constants/Theme";
import { useForm, Controller } from "react-hook-form";
const { contraseña } = require("../services/cliente.service");

const { width } = Dimensions.get("screen");
const CambiarContraseña = (props) => {
  const [leyenda, setLeyenda] = useState();
  const { navigation } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    let mailUser = await AsyncStorage.getItem("mailCliente")
    //Como ya viene directo del coso porque el otp es true, le mando a setear directo.,
    console.log("El mail al que le manda es: "+mailUser + " nueva contraseña "+data.Contraseña +  " la otra" +data.contraseñaRepetida) //data.contraseñaRepetida
    if(data.Contraseña == data.contraseñaRepetida){
      setLeyenda();
      const res = await contraseña(mailUser, data.Contraseña);
      console.log(res);
      await AsyncStorage.setItem("state","1");
      navigation.navigate("App");
    }else {
      setLeyenda(
        <Text style={{ color: "red", fontSize: 15 }}>
          Las contraseñas ingresadas no coinciden entre si.
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>BetFast</Text>
        </View>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={!!errors.password}
                secureTextEntry={true}
                placeholder="Nueva contraseña"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="padlock-unlocked"
                    family="ArgonExtra"
                    style={styles.inputIcons}
                  />
                }
              />
            )}
            name="Contraseña"
            rules={{ required: true }}
            defaultValue=""
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={!!errors.password}
                secureTextEntry={true}
                placeholder="Repetir contraseña"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="padlock-unlocked"
                    family="ArgonExtra"
                    style={styles.inputIcons}
                  />
                }
              />
            )}
            name="contraseñaRepetida"
            rules={{ required: true }}
            defaultValue=""
          />
          {leyenda}
          <Button
            style={styles.button}
            color={argonTheme.COLORS.BLUE}
            onPress={handleSubmit(onSubmit)}
            textStyle={{ color: argonTheme.COLORS.WHITE }}
          >
            Actualizar contraseña
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEBB00",
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "25%",
  },
  title: {
    fontSize: 40,
    color: "#0084AE",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "10%",
    width: width * 0.7,
  },
  subtitle: {
    fontSize: 20,
    color: "#3483FA",
    marginTop: "5%",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 2,
  },
  inputIcons: {
    marginRight: 12,
  },
  button: {
    width: width - theme.SIZES.BASE * 12,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: "10%",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default CambiarContraseña;
