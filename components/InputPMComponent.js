import { Block, Text, Button, theme } from "galio-framework";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Image, Animated } from "react-native";
import { Input } from ".";
import Picker from "@react-native-picker/picker";
import { argonTheme } from "../constants";
import CustomModal from "../components/CustomModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import CustomizedPicker from "../components/CustomizedPicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { postPaymentsMethod } = require("../services/mediosDePago.service");
const addTarjeta = require("../assets/imgs/addTarjIcon.png");
const ancho = Dimensions.get("screen").height;

const getClient = async (setNumeroCliente) => {
  const nc = await AsyncStorage.getItem("idCliente");
  setNumeroCliente(nc);
};
const fetchPM = (formData, nc) => {
  const objeto = {
    cardNumber: formData.cardNumber,
    CVV: formData.CVV,
    expiryDate: formData.expiryDate,
    idCliente: nc,
    isValidated:1,
    country: "Argentina", //Corregir para ver como lo saco del CustomPicker
  };
  return objeto;
};
export default function InputPMComponent({ navigation }) {
  const [postPM, setPostPM] = useState();
  const [isVisible,setEstadoVisible] = useState(false);
  //const [forceUpdate,setForceUpdate] = useState(false)

  useEffect(() => {
    getClient(setPostPM);
  }, [postPM]);

  const onSubmit = (data) => {
    //console.log({ ...data });
    const objeto = fetchPM(data, postPM);
    const objetoCreado = postPaymentsMethod(objeto);
    //setForceUpdate(!forceUpdate);
    navigation.navigate("CargaCorrecta", { cardNumber: data.cardNumber });
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(postPM);
  const inputStyles = [stylesSheet.input, stylesSheet.shadow];
  const listaPaises = [
    {
      pais: "Argentina",
      key: "0",
    },
    {
      pais: "Brasil",
      key: "1",
    },
    {
      pais: "Chile",
      key: "2",
    },
    {
      pais: "Peru",
      key: "3",
    },
    {
      pais: "Colombia",
      key: "4",
    },
  ];
  //Seteo el body para el post.
  return (
    <Block>
      <View style={stylesSheet.formContainer}>
        <Text h4 style={stylesSheet.titulo} size={20}>
          AÑADIR NUEVA TARJETA
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={stylesSheet.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={!!errors.cardNumber}
                placeholder="Numero de tarjeta"
              />
            )}
            name="cardNumber"
            rules={{ required: true, pattern: /^[0-9]{16}$/ }}
            defaultValue=""
          />
          {errors.cardNumber?.type === "required" && (
            <Text style={stylesSheet.error}>Este campo es obligatorio.</Text>
          )}
          {errors.cardNumber?.type === "pattern" && (
            <Text style={stylesSheet.error}>
              Este numero de tarjeta es invalido.
            </Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={stylesSheet.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={!!errors.cardNumber}
                placeholder="CVV"
              />
            )}
            name="CVV"
            rules={{ required: true, pattern: /^[0-9]{3}$/ }}
            defaultValue=""
          />
          {errors.CVV?.type === "required" && (
            <Text style={stylesSheet.error}>Este campo es obligatorio.</Text>
          )}
          {errors.CVV?.type === "pattern" && (
            <Text style={stylesSheet.error}>
              Este CVV de tarjeta es invalido.
            </Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={stylesSheet.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={!!errors.cardNumber}
                placeholder="Exp.Date"
              />
            )}
            name="expiryDate"
            rules={{
              required: true,
              pattern: /^\d{2}[./]\d{2}$/,
            }}
            defaultValue=""
          />
          {errors.expiryDate?.type === "required" && (
            <Text style={stylesSheet.error}>Este campo es obligatorio.</Text>
          )}
          {errors.expiryDate?.type === "pattern" && (
            <Text style={stylesSheet.error}>
              Esta fecha de vencimiento es invalida.
            </Text>
          )}
          <Block style={inputStyles}>
            <CustomizedPicker listaPaises={listaPaises}></CustomizedPicker>
          </Block>
        </Block>
      </View>
      <View
        style={{
          alignItems: "flex-end",
          bottom: 0,
          right: 1,
          marginBottom: ancho - 50,
        }}
      >
        <TouchableOpacity
          onPress={
            ((formData) => console.log("formData" + formData),
            handleSubmit(onSubmit))
          }
        >
          <Image source={addTarjeta}></Image>
        </TouchableOpacity>
      </View>
    </Block>
  );
}

//this.props.navigation.navigate("CargaCorrecta",{cardNumber:this.state.cardNumber});
//Va tercero en el render
const renderModalOnUpdate = (estadoModal) => {
  const agregarTarjeta = "¿Estás seguro que querés agregar esta tarjeta?";
  if (estadoModal) {
    return (
      <CustomModal
        visible={estadoModal}
        decir={false}
        cardNumber={1234}
        hijo={
          <View
            style={{
              alignItems: "center",
              flex: 1,
              padding: 20,
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ textAlign: "center" }}>{agregarTarjeta}</Text>
            </View>
            <View
              style={{
                alignContent: "space-between",
                flex: 1,
                flexDirection: "row",
              }}
            >
              <Button
                style={
                  (stylesSheet.botonSi,
                  { width: 100, height: 30, borderRadius: 40 })
                }
                onPress={this.eliminarCard}
              >
                SI
              </Button>

              <Button
                style={
                  (stylesSheet.botonNo,
                  { width: 100, height: 30, borderRadius: 40 })
                }
              >
                NO
              </Button>
            </View>
          </View>
        }
      ></CustomModal>
    );
  }
};

const stylesSheet = StyleSheet.create({
  error: {
    color: "red",
    marginBottom: 10,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "8%",
  },
  botonSi: {
    paddingLeft: 10,
  },
  botonNo: {
    paddingRight: 10,
  },
  headerModal: {
    width: "100%",
    height: 40,
    paddingTop: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalMostrar: {
    width: "75%",
    height: "25%",
    backgroundColor: "white",
    borderRadius: 40,
    elevation: 20,
  },
  modalFondo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: "black",
  },
  pickerContainer: {
    alignSelf: "center",

    marginTop: 30,
    width: 350,
    height: 50,
    borderRadius: 2,

    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 1,
  },
  picker: {
    width: 370,
    height: 44,
    borderRadius: 50,
    paddingLeft: 10,
  },
  input: {
    borderRadius: 4,
    borderColor: argonTheme.COLORS.BORDER,
    height: 44,
    backgroundColor: "#FFFFFF",
  },
  success: {
    borderColor: argonTheme.COLORS.INPUT_SUCCESS,
  },
  error: {
    borderColor: argonTheme.COLORS.INPUT_ERROR,
  },
  shadow: {
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
  },
  vistaPadre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  viewHijo: {
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  borrarCard: {
    backgroundColor: "#EF280F",
  },
  noBorrarCard: {
    backgroundColor: "#6DC36D",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    shadowColor: "#000",
    borderRadius: 20,
    backgroundColor: "white",
  },
  input: {
    borderRadius: 4,
    borderColor: argonTheme.COLORS.BORDER,
    height: 44,
    backgroundColor: "#FFFFFF",
  },
  success: {
    borderColor: argonTheme.COLORS.INPUT_SUCCESS,
  },
  error: {
    borderColor: argonTheme.COLORS.INPUT_ERROR,
  },
  shadow: {
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
  },
});
