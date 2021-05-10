import React, {Component} from "react";
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView
} from "react-native";
import {ActionSheet, Root, Title} from  "native-base";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Switch, Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import ImagePicker from 'react-native-image-picker';
import { ActionSheetIOS } from "react-native";

//const width = Dimensions.get('window').width;
const { width, height } = Dimensions.get("screen");
export default class ImagePick extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fileList:[]
      }
      //estas 2 lineas las agregue xq rompía
      this.takePhotoFromCamera = this.takePhotoFromCamera.bind(this);
      this.choosePhotoFromLibrary = this.choosePhotoFromLibrary.bind(this);
    }

    onSelectedImage = (image) => {
        let newDataImg = this.state.fileList;
        const source = {uri: image.path};
        let item = {
            id: Date.now(),
            url: source,
            content: image.data
        };
        newDataImg.push(item);
        this.setState({fileList: newDataImg});
    };

    takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
              this.onSelectedImage(image);
            console.log(image);
          });
    };
    choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            this.onSelectedImage(image);
            console.log(image);
          });
    };

    onClickAddImage = () => {
        const BUTTONS = ['Sacar foto', 'Seleccionar desde galería', 'Cancelar'];
        
        ActionSheet.show({options: BUTTONS, cancelButtonIndex: 2,title: 'Seleccionar foto...'},
                buttonIndex => {
                    switch(buttonIndex){
                        case 0:
                            //this.takePhotoFromCamera();
                            this.takePhotoFromCamera.bind(this,false);
                            break;
                        case 1:
                            //this.choosePhotoFromLibrary();
                            this.choosePhotoFromLibrary(this,false);
                            break;
                        default:
                            break
                    }
                }
            
            
            )
        };
    renderItem = ({item,index})=>{
        let {itemViewImage, itemImage} = styles;
        return(
            <View style={itemViewImage}>
                <Image source={item.url} style={itemImage}></Image>
            </View>
        )
    };

    render(){
        let {content, btnPressStyle, textStyle} = styles;
        let {fileList} = this.state;

        return (
            <Root>
                <View style={content}>
                    <FlatList
                        data={fileList}
                        renderItem={this.renderItem}
                        keyExtractor={(item,index) => index.toString()}
                        extraData={this.state}
                    />
                    <TouchableOpacity onPress={this.onClickAddImage} style = {btnPressStyle}>
                        <Text style={textStyle}>Cargar fotos</Text>
                    </TouchableOpacity>
                    
                </View>
            </Root>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        flex: 0, //estaba en 1
        alignItems: 'center',
        marginTop: 8,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 20
    },
    btnPressStyle: {
        backgroundColor: '#0080ff',
        height: 40,
        width: width - 85,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color:'#ffffff'
    },
    itemImage: {
        backgroundColor: '#2f455c',
        height: 150,
        width: width - 60,
        borderRadius: 8,
        resizeMode: 'contain'
    },
    itemViewImage: {
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10
    }
  });

/* const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Elegir foto de Facebook'}],
    storageOptions: {
      skipBuckup: true,
      path: 'images'
    },
  }; */
 /*  launchImagePicker(){
    ImagePicker.showImagePicker(options,response => {
      console.log('Response = ', response);
      if(response.didCancel) {
        console.log("User Cancelled image picker");
      }else if (response.error) {
        console.log("Image Picker Error: ", response.error);
      }else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      }else{
        console.log(response.data);
        const source = {uri: 'data:image/jpeg;base64,${response.data}'};
        setImage(source);
      }
    })
  } */