import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Modal,
  SafeAreaView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import {Picker} from '@react-native-picker/picker';

import Header from '../components/Header'
import { Switch, Button, Icon, Input, Select } from "../components";
import { Images, argonTheme } from "../constants";
import ImagePicker from 'react-native-image-picker';
import ImagePick from '../components/ImagePick';
import Menu from '../navigation/Menu'
import PickerSelect from '../components/PickerSelect';
//import SimpleModal from '../components/SimpleModal';
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";


const { width, height } = Dimensions.get("screen");

 
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue:false,
      inputValue:'',
      categoriaSeleccionada:'',
      show:false
    }
  }
 
  toggleSwitch = (value) =>{
    this.setState({switchValue: value});
  }
  handleInput = (value) =>{
    console.log(value);
    this.setState({inputValue: value});
  }
  handleSelect = (value) =>{
    console.log(value);
    this.setState({categoriaSeleccionada: value});
    console.log(this.state.categoriaSeleccionada);
  }
  handleForm = () => {

  }
  handleIcon = () => {
    console.log("ok");
  }

 

  render() {

    let form;
    if(this.state.switchValue === false){
      form = (
        <Block flex>
        <Block flex width={width * 0.8} style={{ marginBottom: 0 }}>
            <PickerSelect
              list = {['Obra de arte','Otro']}
              onValueChange = {value => this.handleSelect (value)}
            ></PickerSelect>
            <Text>categoria: {this.state.categoriaSeleccionada}</Text>
          <Input
            borderless
            placeholder="Observaciones"
            iconContent={false}
          />
          <Block row>
          <Input
            keyboardType="numeric"
            borderless
            placeholder="Precio sugerido"
            iconContent={false}
            />
            
            <PickerSelect
              list = {['ARS','USD']}
              width = {'50%'}
            ></PickerSelect>
            

          </Block>
          <ImagePick></ImagePick>
        </Block>
        </Block>
      );
    }else{
      form = (
        <Block flex width={width * 0.8} style={{ marginBottom: 0 }}>
          <Text>valor: {this.state.inputValue}</Text>
            <Input
              borderless
              placeholder="¿De qué se trata tu colección de artículos?"
              iconContent={false}
              onChange={this.handleInput}
            />
          <Input
            borderless
            placeholder="Observaciones"
            iconContent={false}
          />
          <Input
            borderless
            keyboardType="numeric"
            placeholder="Cantidad de piezas"
            iconContent={false}
          />
          <Block>
            <Block row>
          <Input
            keyboardType="numeric"
            borderless
            placeholder="Precio sugerido"
            iconContent={false}
            />
            
            <PickerSelect
              list = {['ARS','USD']}
              width = {'50%'}
            ></PickerSelect>
            

          </Block>

          </Block>
          <ImagePick></ImagePick>
        </Block>
      );
    }
    
    return (
      <View style={{marginTop:'20%'}}>
      <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        {/* <View style={styles.header}>
        HEADER DE LAUTI
        </View> */}
        <View style={styles.formContainer}>
            <Modal
              transparent={true}
              visible={this.state.show}
            >
              <View style={{backgroundColor:"#000000aa", flex: 1}}>
                <View style={{backgroundColor:"#ffffff", alignItems: 'center', justifyContent: 'center', margin:30, marginVertical: 300 , borderRadius: 10 ,flex: 1}}>
                    <Text style={[styles.text2, {fontSize: 24, color: '#3483FA'}]}>Artículo enviado exitosamente</Text>
                    <Text style={styles.text2}>Recibirás un correo electrónico una vez que analicemos el artículo</Text>
                  <Button
                    onPress={() => {this.setState({show:false})}}
                    size='small'
                    >
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>REGRESAR</Text></Button>
                </View>
              </View>
            </Modal>
            <Text center color="#3483FA" size={22}>
              ¿Qué tipo de artículo te gustaría subastar?
            </Text>
            <TouchableOpacity
                onPress = {this.handleIcon}
              >
              <Icon
                  size={16}
                  color={argonTheme.COLORS.ICON}
                  name="hat-3"
                  family="ArgonExtra"
                  style={styles.inputIcons}
                />
            </TouchableOpacity>
            <Block row style={{marginTop: 10}}>
              <Text style={{paddingRight: 60}} color="#000000" size={18}>
                Colección de artículos
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={this.toggleSwitch}
                value={this.state.switchValue}
                >
              </Switch>
            </Block>
                  {form}
                  <Block middle>
                      <Button 
                        color= "primary" 
                        onPress={() => {this.setState({show:true})}}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          ENVIAR
                      </Text>
                      </Button>
                      
                    </Block>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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
  },
  input: {
    borderWidth: 2
  },
  text2: {
    margin: 5,
    fontSize: 16,
    textAlign: 'center'
}
});

export default Register;
