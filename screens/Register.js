import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Modal,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Switch, Button, Icon, Input } from "../components";
import { argonTheme } from "../constants";
import ImagePick from '../components/ImagePick';
import PickerSelect from '../components/PickerSelect';
import { useForm, Controller } from "react-hook-form";


const { width, height } = Dimensions.get("screen");


const Register = (props) => {
  const navigation = props.navigation;
//coleccion
  const [switchValue, setSwitchValue] = useState(false);
  const [collectionTitle, setCollectionTitle] = useState('');
  const [collectionDescription, setCollectionDescription] = useState('');
  const [collectionObservations, setCollectionObservations] = useState('');
  const [collectionPieces, setCollectionPieces] = useState('');
  const [collectionPrice, setCollectionPrice] = useState('');
//articulo
  const [articleTitle, setArticleTitle] = useState('');
  const [especificaciones, setEspecificaciones] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [precio, setPrecio] = useState('');

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [show, setShow] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    setShow(true)
    console.log(data);
  };


  const form1 =
    <Block flex>
      <Block flex width={width * 0.8} style={{ marginBottom: 0 }}>
        <PickerSelect
          list={['Obra de arte', 'Otro']}
          onValueChange={value => setCategoriaSeleccionada(value)}
        ></PickerSelect>
        <Text>categoria: {categoriaSeleccionada}</Text>
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={value => {onChange(value) ,setArticleTitle(value)}}
                error={!!errors.tituloArticulo}
                placeholder="Título del artículo"
                iconContent={false}
                style={styles.input}
              />
            )}
            name="tituloArticulo"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.tituloArticulo?.type === 'required' &&
          <Text style={styles.error}>
            Este campo es obligatorio.
          </Text>}
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={value => {onChange(value) ,setEspecificaciones(value)}}
                error={!!errors.especificaciones}
                placeholder="Indique las especificaciones técnicas"
                iconContent={false}
                style={styles.input}
              />
            )}
            name="especificaciones"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.especificaciones?.type === 'required' &&
          <Text style={styles.error}>
            Este campo es obligatorio.
          </Text>}
          <Input
            style={styles.input}
            placeholder="Observaciones"
            iconContent={false}
            onChangeText={value => setObservaciones(value)}
          />
        <Block row>
            <Input
              keyboardType="decimal-pad"
              placeholder="Precio sugerido"
              iconContent={false}
              style={styles.input}
              onChangeText={value => setPrecio(value)}
            />
          <PickerSelect
            list={['ARS', 'USD']}
            width={'50%'}
          ></PickerSelect>
        </Block>
        <ImagePick></ImagePick>
      </Block>
    </Block>

  const form2 =
    <Block flex width={width * 0.8} style={{ marginBottom: 0 }}>
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={value => {onChange(value) ,setCollectionTitle(value)}}
                error={!!errors.tituloColeccion}
                placeholder="Título de la colección"
                iconContent={false}
                style={styles.input}
              />
            )}
            name="tituloColeccion"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.tituloColeccion?.type === 'required' &&
          <Text style={styles.error}>
            Este campo es obligatorio.
          </Text>}
      <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={value => {onChange(value), setCollectionDescription(value)}}
                error={!!errors.coleccion}
                placeholder="¿De qué se trata tu colección de artículos?"
                iconContent={false}
                style={styles.input}
              />
            )}
            name="coleccion"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.coleccion?.type === 'required' &&
          <Text style={styles.error}>
            Este campo es obligatorio.
          </Text>}
      <Input
        style={styles.input}
        placeholder="Observaciones"
        iconContent={false}
        onChangeText={value => setCollectionObservations(value)}
      />
      <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={value => {onChange(value), setCollectionPieces(value)}}
                error={!!errors.piezas}
                placeholder="Cantidad de piezas"
                iconContent={false}
                style={styles.input}
                keyboardType="decimal-pad"
              />
            )}
            name="piezas"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.piezas?.type === 'required' &&
          <Text style={styles.error}>
            Este campo es obligatorio.
          </Text>}
      <Block>
        <Block row>
          <Input
            keyboardType="decimal-pad"
            style={styles.input}
            placeholder="Precio sugerido"
            iconContent={false}
            onChangeText={value => setCollectionPrice(value)}
          />
          <PickerSelect
            list={['ARS', 'USD']}
            width={'50%'}
          ></PickerSelect>
        </Block>
      </Block>
      <ImagePick></ImagePick>
    </Block>


  return (
    
    <SafeAreaView style={{flex: 1}}>
    
    <Block style={styles.container}>
        <Modal
          transparent={true}
          visible={show}
        >
          <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
            <View style={{ backgroundColor: "#ffffff", alignItems: 'center', justifyContent: 'center', margin: 30, marginVertical: '65%', borderRadius: 10, flex: 1 }}>
              <Text style={[styles.text2, { fontSize: 24, color: '#3483FA' }]}>Artículo enviado exitosamente</Text>
              <Icon 
                name={"mail"} family="AntDesign" 
                size={50}
                style={{ marginTop: 2 }}
              />
              <Text style={styles.text2}>Recibirás un correo electrónico una vez que analicemos el artículo</Text>
              <Button
                style={styles.btnVerProducto}
                onPress={() => {setShow(false), navigation.navigate('Home')}}
                size='small'
              >
                <Text size={16} style={{color:'#FFFFFF'}} bold >Regresar</Text>
                </Button>
            </View>
          </View>
        </Modal>
        
        <Text center color="#3483FA" size={22}>
          ¿Qué tipo de artículo te gustaría subastar?
            </Text>
        <Block row style={{ marginTop: 10 }}>
          <Text style={{ paddingRight: 60 }} color="#000000" size={18}>
            Colección de artículos
              </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSwitchValue(switchValue === false ? true : false)}
            value={switchValue}
          >
          </Switch>
        </Block>
        {switchValue === false ? form1 : form2}
          
          <Button
            style={styles.btnVerProducto}
            onPress={(handleSubmit(onSubmit))}>
            <Text size={16} style={{color:'#FFFFFF'}} bold >Enviar</Text>
          </Button>
         
          
          
      </Block>
      
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%'
  },
  touchableOpacity: {
    backgroundColor: 'orange',
    paddingHorizontal: 50
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold'
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
    paddingVertical: '5%', //estaba en 10
    width: width * 0.7,
    flex: 1
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
  input: {
    borderWidth: 2
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
  },
  input: {
    borderWidth: 2
  },
  text2: {
    margin: 5,
    fontSize: 16,
    textAlign: 'center'
  },
  btnVerProducto:{
    alignSelf:'center',
    marginTop:20,
    borderRadius:10,
    backgroundColor:'#3483FA'
  }
});

export default Register;
