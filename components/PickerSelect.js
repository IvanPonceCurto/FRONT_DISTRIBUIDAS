import React, { useState} from "react";
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

const { width, height } = Dimensions.get("screen");

class PickerSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        opciones:this.props.list,
        categoriaSeleccionada:''
    }
  }

  render() {
      return(
            <Picker
                selectedValue={this.state.categoriaSeleccionada}
                style={{height:44, width: this.props.width, marginTop:10}}
                onValueChange={(itemValue) =>
                this.setState({categoriaSeleccionada: itemValue})
                }>
                {
                    this.state.opciones.map(valor => {
                        return <Picker.Item label={valor} value={valor} />
                    })
                }
                
            </Picker>
      );
  }

}


export default PickerSelect;
