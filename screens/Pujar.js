import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Dimensions, Platform, ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { HeaderHeight } from "../constants/utils";
import { Picker } from '@react-native-picker/picker';
import { Input } from "../components";
import { useForm, Controller } from "react-hook-form";
import { SliderBox } from 'react-native-image-slider-box'
const {getPujaActual,nuevaPuja} = require('../services/registroDeSubasta.service')

const { height, width } = Dimensions.get('screen');

const altura = height - height * 0.40;
const mediosDePago = [
  {
    idMedio: '1234',
    tipo: 'VISA',
    nroTarjeta: '4534563327'
  },
  {
    idMedio: '1234',
    tipo: 'VISA',
    nroTarjeta: '4534563395'
  },
  {
    idMedio: '1234',
    tipo: 'VISA',
    nroTarjeta: '4534563355'
  }
]

//picker select fijarse meterle un preventDefault()
class RenderPicker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mediosDePago: this.props.mediosDePagoList,
      selectedMedioDePago: 'Medio de Pago'
    }
  }

  render() {
    return (

      <Picker

        style={styles.picker}
        selectedValue={this.state.selectedMedioDePago}
        onValueChange={(itemValue) => this.setState({ selectedMedioDePago: itemValue })}
      >
        {
          this.state.mediosDePago.map(tarjeta => {

            return <Picker.Item key={tarjeta.idMedio} label={tarjeta.tipo + ': ' + '****' + tarjeta.nroTarjeta.substring(6, 10)} value={tarjeta.idMedio} />
          })
        }
      </Picker>

    )
  }

}



//COSAS A HACER EN PANTALLA: 
//falta crear el useEffect y dentro meterle el get puja actual
//falta pegarle a los medios de pago 
//falta hacer el post de registro de subasta (puja)
//falta pegarle al precio actual de la subasta (get puja actual)
export default function Pujar({route,navigation}) {

  const objeto = route.params;
	const subasta = objeto.subasta;
	const producto = objeto.producto;

	const fotos = producto.lightfotos.map(foto =>{
		return foto.referencia_url;
	})
 
  const[oferta,setOferta] = useState(0);
  const[pujaActual,setPujaActual] = useState();

  const [marginTopScrollView, setMarginTopScrollView] = useState('-20%')
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  useEffect(()=>{
   
    getPujaActual(subasta.idSubasta,producto.idProducto,setPujaActual);
    
  },[setPujaActual])

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
                  <Block row space="between" style={styles.cardHeader}>
                    <Text size={40} style={styles.productPrizeText}>{pujaActual}</Text>
                  </Block>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Block style={styles.pickerContainer}>
                    <RenderPicker mediosDePagoList={mediosDePago} />
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

                  <Button
                    style={styles.btnRealizarOferta}
                    onPress={(handleSubmit(onSubmit))}
                  >
                    <Text size={16} style={{ color: '#FFFFFF' }} bold onPress={()=>{nuevaPuja(subasta.idSubasta,producto.id_duenio,producto.idProducto,1,oferta);setOferta()}}>Pujar</Text>
                  </Button>
                </View>
              </KeyboardAvoidingView>
            </Block>

          </ScrollView>
        </Block>
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
  backgroundImageContainer: {
    width: width,
    height: height / 1.5
  },
  backgroundImage: {
    width: '100%',
    height: '100%'

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
    marginTop: 20,
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
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#3483FA'

  },
  pickerContainer: {
    alignSelf: 'center',

    marginTop: 30,
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
