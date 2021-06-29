import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Platform, ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { HeaderHeight } from "../constants/utils";
import { Picker } from '@react-native-picker/picker';
import { Input } from "../components";
import CountDown from 'react-native-countdown-component';
import { useForm, Controller } from "react-hook-form";
import { SliderBox } from 'react-native-image-slider-box'
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { getPujaActual, nuevaPuja } = require('../services/registroDeSubasta.service')
const { getMetodosDePago } = require('../services/mediosDePagoService');
const { updateEstadoSubasta } = require('../services/subasta.service');
const { height, width } = Dimensions.get('screen');

const deviceWidth = Dimensions.get('window').width;

const altura = height - height * 0.40;



//COSAS A HACER EN PANTALLA: 
//falta retocar estilos del modal

export default function Pujar({ route, navigation }) {

  const objeto = route.params;
  const subasta = objeto.subasta;
  const producto = objeto.producto;

  const fotos = producto.lightfotos.map(foto => {
    return foto.referencia_url;
  })

  const [oferta, setOferta] = useState();
  const [pujaActual, setPujaActual] = useState(producto.itemsCatalogo.precioBase);
  const [open, setOpen] = useState(false);
  const [openModalSubastaTerminada, setOpenModalSubastaTerminada] = useState(false);
  const [mediosDePagos, setMediosDePago] = useState([]);
  const [selectedValue, setSelectedValue] = useState('Elija su Medio de Pago')
  const [marginTopScrollView, setMarginTopScrollView] = useState('-20%')
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [counter, setCounter] = useState(60 * 5);
  const [countId, setCountId] = useState('1');

  const resetCounter = () => {
    setCountId(countId + '1')
    setCounter(60 * 5);
  }

  const obtenerMediosDePago = async function () {
    const idCliente = await AsyncStorage.getItem('idCliente');
    await getMetodosDePago(idCliente, setMediosDePago);
  }

  const cerrarSubasta = () => {
    updateEstadoSubasta(subasta.idSubasta);
    navigation.navigate("Home", {
      tipo: 'Articulo',
      data: producto
    });
  }

  const obtenerPuja = async function () {
    var requestOptions = {
      method: 'GET'

    };

    let response = await fetch(`https://distribuidas-backend.herokuapp.com/api/registrosDeSubasta/getRegistroActual/${subasta.idSubasta}/${producto.idProducto}`, requestOptions)

    let data = await response.json();
    if (data.pujaActual != 0) {
      setPujaActual(data.pujaActual);
    }
  }


  useEffect(() => {
    obtenerPuja()
    obtenerMediosDePago()
  }, [])

  const pujar = async function () {
    const idCliente = await AsyncStorage.getItem('idCliente');
    if (oferta > pujaActual && oferta >= producto.itemsCatalogo.precioBase * 0.01 && oferta <= pujaActual * 1.2) {
      await nuevaPuja(subasta.idSubasta, producto.id_duenio, producto.idProducto, idCliente, oferta, setPujaActual);
      resetCounter();
    } else {

      setOpen(true)
    }

  }

  return (

    <KeyboardAvoidingView style={styles.producto}>
      <Block style={styles.container}>
        <Block style={styles.backgroundImageContainer}>
          <SliderBox images={fotos} dotStyle={{ marginBottom: 90 }} style={styles.backgroundImage} ></SliderBox>
        </Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width, marginTop: marginTopScrollView, marginBottom: '-15%' }}
        >

          <Block flex style={styles.productCard}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
              <View>
                <View style={styles.countDownContainer}>
                  <CountDown
                    id={countId}
                    until={counter}
                    size={18}
                    onFinish={() => setOpenModalSubastaTerminada(true)}
                    digitTxtStyle={{ color: '#3483FA' }}
                    digitStyle={{backgroundColor: '#FFF'}}
                    separatorStyle={{color: '#3483FA'}}
                    timeToShow={['M', 'S']}
                    timeLabels={{ m: null, s: null }}
                    showSeparator
                  />
                </View>
                <Block row space="between" style={styles.cardHeader}>
                  <Text size={30} style={styles.productPrizeText}>${pujaActual}</Text>
                </Block>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Block style={styles.pickerContainer}>
                  <Picker

                    style={styles.picker}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                  >
                    {
                      mediosDePagos.map(tarjeta => {

                        return <Picker.Item key={tarjeta.cardNumber} label={'VISA: ' + '****' + tarjeta.cardNumber.substring(10, 16)} value={tarjeta.cardNumber} />
                      })
                    }
                  </Picker>

                </Block>

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      style={styles.input}
                      onBlur={onBlur, () => setMarginTopScrollView('-20%')}
                      onFocus={() => setMarginTopScrollView('-65%')}
                      onChangeText={value => {
                        onChange(value)
                        setOferta(value);
                      }}
                      value={oferta}
                      error={!!errors.monto}
                      placeholder="Monto"
                      keyboardType='decimal-pad'
                    />
                  )}
                  name="monto"
                  rules={{ required: true }}
                  defaultValue=""
                />
                {errors.monto?.type === 'required' &&
                  <Text style={styles.error}>
                    Este campo es obligatorio.
                  </Text>}
                <Text style={styles.linkStream}>http://stream.tv/subasta:{subasta.idSubasta}</Text>
                <Button
                  style={styles.btnRealizarOferta}

                  onPress={handleSubmit(pujar)}
                >
                  <Text size={16} style={{ color: '#FFFFFF' }} bold >Pujar</Text>
                </Button>
              </View>
            </KeyboardAvoidingView>
          </Block>
        </ScrollView>
      </Block>
      <Modal coverScreen={false} deviceHeight={height * 1.2} isVisible={open}>
        <Block style={styles.modalContainer}>
          <Text size={15} style={styles.modalText1}>El Monto ofertado debe ser mayor a {pujaActual + producto.itemsCatalogo.precioBase * 0.01}</Text>
          <Text size={15} style={styles.modalText2}>El Monto ofertado debe ser menor a {pujaActual * 1.2}</Text>
          <Button style={styles.modalButton} onPress={() => setOpen(false)}>OK</Button>
        </Block>
      </Modal>
      <Modal coverScreen={false} deviceHeight={height * 1.2} isVisible={openModalSubastaTerminada}>
        <Block style={styles.modalContainer}>
          <Text size={15} style={styles.modalText1}>La subasta ha finalizado.</Text>
          <Button style={styles.modalButton} onPress={() => cerrarSubasta()}>OK</Button>
        </Block>
      </Modal>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({

  producto: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    flex: 1
  },
  container: {
    width: width,
    height: height,
    padding: 0

  },
  linkStream: {
    marginTop: 10,
    color: '#1A79B0'
  },
  backgroundImageContainer: {
    width: width,
    height: height / 1.5
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  modalContainer: {
    width: 350,
    height: 150,
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  modalText1: {
    marginTop: 20
  },
  modalText2: {
    marginTop: 5,
    marginBottom: 10
  },
  modalButton: {
    backgroundColor: '#3483FA',
    borderRadius: 15,
    marginTop: 20
  },
  productCard: {

    padding: 0,
    marginHorizontal: theme.SIZES.BASE,
    borderTopLeftRadius: 20,
    height: altura,

    borderTopRightRadius: 20,
    backgroundColor: '#FFFFFF',

  },
  cardHeader: {
    marginTop: 2,
    alignSelf: 'center',
    alignContent: 'center'
  },
  productNameText: {
    marginLeft: 20,
    marginTop: 16
  },
  productPrizeText: {
    textAlign: 'center',
    marginRight: 20,
    marginTop: 10
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#C6C6C6",
  },
  avatarContainer: {
    position: "relative",
    marginTop: 30,
    marginLeft: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 0
  },
  duenioText: {
    marginTop: 60,
    marginLeft: 20
  },
  descripcionContainer: {
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
    width: width / 2

  },
  tituloDescripcion: {
    color: '#707070'
  },
  descripcionLarga: {
    marginTop: 20,
    color: '#707070'
  },
  btnRealizarOferta: {
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#3483FA'

  },
  pickerContainer: {
    alignSelf: 'center',

    marginTop: 10,
    width: 250,
    height: 50,
    borderRadius: 2,

    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 3,

  },
  picker: {
    width: 250,
    height: 50,
    borderRadius: 20
  },
  countDownContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingTop: 10
  },
  input2: {
    marginTop: 30,
    height: 50,
    width: 250,
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 3,
  },
  input: {
    borderWidth: 2,
    marginTop: 10,
    width: 250,
    height: 50,
    alignSelf: 'center'
  },
  error: {
    color: 'red',
    marginBottom: 10
  },
  containerCountDown: {

    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',

  }
})
