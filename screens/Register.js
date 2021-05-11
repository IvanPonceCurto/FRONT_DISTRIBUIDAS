import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  View
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import {Picker} from '@react-native-picker/picker';

import { Switch, Button, Icon, Input, Select } from "../components";
import { Images, argonTheme } from "../constants";
import ImagePicker from 'react-native-image-picker';
import ImagePick from '../components/ImagePick';
import Menu from '../navigation/Menu'
import PickerSelect from '../components/PickerSelect';

import { RadioButton } from 'react-native-paper';


const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue:false,
      inputValue:''
    }
  }
  toggleSwitch = (value) =>{
    this.setState({switchValue: value});
  }
  handleInput = (value) =>{
    console.log(value.target.value);
    console.log("value");
    this.setState({inputValue: value});
  }
 

  render() {

    let form;
    if(this.state.switchValue === false){
      form = (
        <Block flex width={width * 0.8} style={{ marginBottom: 0 }}>
            <PickerSelect
              style = {{width: 100}}
              list = {['Seleccione una categoría','Obra de arte','Otro']}
            ></PickerSelect>
            <Input
            borderless
            placeholder="Nombre del autor"
            iconContent={false}
          />
          <Input
            borderless
            placeholder="Fecha de la obra"
            iconContent={false}
          />
          <Input
            borderless
            placeholder="Historia de la obra"
            iconContent={false}
          />
          <Input
            borderless
            placeholder="Observaciones"
            iconContent={false}
          />
          <Block row>
          <Input
            keyboardType="numeric"
            borderless
            placeholder="Precio"
            iconContent={false}
            />
            
            <PickerSelect
              list = {['ARS','USD']}
            ></PickerSelect>
            

          </Block>
          <ImagePick></ImagePick>
        </Block>
      );
    }else{
      form = (
        <Block flex width={width * 0.8} style={{ marginBottom: 0 }}>
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
          <Input
            keyboardType="numeric"
            borderless
            placeholder="Precio"
            iconContent={false}
            />
            <Block row>
          <Input
            keyboardType="numeric"
            borderless
            placeholder="Precio"
            iconContent={false}
            />
            
            <PickerSelect
              list = {['ARS','USD']}
            ></PickerSelect>
            

          </Block>

          </Block>
          <ImagePick></ImagePick>
        </Block>
      );
    }
    
    return (
      <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
      
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Text center color="#3483FA" size={22}>
                  ¿Qué tipo de artículos te gustaría subastar?
                </Text>
                <Block row style={{marginTop: 10}}>
                <Text style={{paddingRight: 50}} color="#000000" size={18}>
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
                
              </Block>
              <Block flex>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                  {form}
                  <Block middle>
                      <Button color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          ENVIAR
                        </Text>
                      </Button>
                    </Block>
                   {/* <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
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
                      
                    </Block> */}

                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Register;
