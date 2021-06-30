import { Block } from "galio-framework";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

class CustomizedPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "Argentina",
      listaPaisesRenderizar: this.props.listaPaises,
    };
  }

  render() {
    return (
      <Block flex alignItems={"center"}>
        <Picker
          style={picker}
          selectedValue={this.state.selectedValue}
          onValueChange={(item) => {
            console.log("item "+item)
            this.setState({ selectedValue: item });
          }}
        >
          {this.state.listaPaisesRenderizar.map((elem) => {
            return (
              <Picker.Item
                label={elem.pais}
                value={elem.pais}
                key={elem.key}
              ></Picker.Item>
            );
          })}
        </Picker>
      </Block>
    );
  }
}

const picker={
    width:370,
    height:44,
    borderRadius:50,
    paddingLeft:10
}
 
export default CustomizedPicker;
