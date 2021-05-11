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
        cursos:this.props.list,
        categoriaSeleccionada:''
    }
  }

  render() {
      return(
        <View>
            <Picker
                selectedValue={this.state.language}
                style={{height:44, width: width - 85}}
                onValueChange={(itemValue) =>
                this.setState({categoriaSeleccionada: itemValue})
                }>
                {
                    this.state.cursos.map(valor => {
                        return <Picker.Item label={valor} value={valor} />
                    })
                }
                
            </Picker>
        </View>
      );
  }

}


export default PickerSelect;
