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

const { width, height } = Dimensions.get("screen");

class Articulos extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      switchValue:false,
      inputValue:'',
      categoriaSeleccionada:'',
      show:false
    }
  } */
  /* toggleSwitch = (value) =>{
    this.setState({switchValue: value});
  } */

  render(){
      return(
        <View>
          <Text>HOLA</Text>
        </View>
        
      );
  }
}

export default Articulos;