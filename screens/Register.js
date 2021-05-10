import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Switch, Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import ImagePicker from 'react-native-image-picker';
import ImagePick from '../components/ImagePick';

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue:false
    }
  }
  toggleSwitch = (value) =>{
    this.setState({switchValue: value});
  }
 

  render() {

    let form;
    if(this.state.switchValue === false){
      form = (
        <Text color="#000000" size={18}>HOLAA</Text>
      );
    }else{
      form = (
        <Block flex width={width * 0.8} style={{ marginBottom: 15 }}>
          <Input
            borderless
            placeholder="¿De qué se trata tu colección de artículos?"
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
          
          <Input
            borderless
            placeholder="Observaciones"
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
          <Input
            borderless
            keyboardType="numeric"
            placeholder="Cantidad de piezas"
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
          <Block row>
          <Input
            keyboardType="numeric"
            borderless
            placeholder="Precio"
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
          <Input
            borderless
            placeholder="ARS"
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
          <ImagePick></ImagePick>
        </Block>
      );
    }
    
    return (
      <Block flex middle>
        <StatusBar hidden />
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
                   <Block width={width * 0.8} style={{ marginBottom: 15 }}>
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
                      
                    </Block>
                    
                    <Block middle>
                      <Button color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          ENVIAR
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
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
