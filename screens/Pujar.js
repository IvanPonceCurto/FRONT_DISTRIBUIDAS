import React, { useState } from "react";
import { Image, StyleSheet, Dimensions, Platform,ScrollView, KeyboardAvoidingView,View} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 
import { HeaderHeight } from "../constants/utils";
import {Picker} from '@react-native-picker/picker';
import { Input, Icon } from "../components";
import { useForm, Controller } from "react-hook-form";

const { height, width } = Dimensions.get('screen');

const altura = height - height*0.5;
const mediosDePago = [
    {
        idMedio:'1234',
        tipo:'VISA',
        nroTarjeta:'4534563327'
    },
    {
        idMedio:'1234',
        tipo:'VISA',
        nroTarjeta:'4534563395'
    },
    {
        idMedio:'1234',
        tipo:'VISA',
        nroTarjeta:'4534563355'
    }
]

class RenderPicker extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            mediosDePago:this.props.mediosDePagoList,
            selectedMedioDePago:'Medio de Pago'
        }
    }
    
    render(){
       console.log(this.state.mediosDePago)
            return(
        
                    <Picker
                    
                        style={styles.picker}
                        selectedValue={this.state.selectedMedioDePago}
                        onValueChange={(itemValue) => this.setState({selectedMedioDePago:itemValue})}
                        >
                        {
                        this.state.mediosDePago.map(tarjeta =>{
                            
                           return  <Picker.Item key={tarjeta.idMedio} label={tarjeta.tipo+': '+'****'+tarjeta.nroTarjeta.substring(6,10)} value={tarjeta.idMedio}/>
                        })
                        }
                    </Picker>       

            )
     }

}


const Pujar = (props) =>{
  
    const {route,navigation} = props;
    const Object = route.params
    const ProductoParam = Object.ProductoParam
    console.log(ProductoParam)
    const { control, formState: { errors } } = useForm();
    return(
       
        <Block flex style={styles.producto}>
        <Block flex>
          <Block style={styles.container}>
            <Block style={styles.backgroundImageContainer}>
                <Image  source={ProductoParam.foto} style={styles.backgroundImage}/>
            </Block>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '-20%',marginBottom:'-15%' }}
            >
            
            <Block flex style={styles.productCard}>
            <KeyboardAvoidingView style={{flex:1}}>
                <View>
                <Block row space="between" style={styles.cardHeader}>
                    <Text size={40} style={styles.productPrizeText}>{ProductoParam.precioBase}</Text>
                </Block>
                <Block middle style={{ marginTop: 10}}>
                    <Block style={styles.divider} />
                </Block>
                </View>
                <View>
                <Block style={styles.pickerContainer}>
                    <RenderPicker mediosDePagoList={mediosDePago}/>
                </Block>
                
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        error={!!errors.lastName}
                        placeholder="Monto"
                        
                    />
                    )}
                    name="lastName"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.lastName?.type === 'required' &&
                    <Text style={styles.error}>
                    Este campo es obligatorio.
                    </Text>}
                    
                <Button style={styles.btnRealizarOferta}>
                    <Text size={16} style={{color:'#FFFFFF'}} bold>Pujar</Text>
                </Button>
                </View>
                </KeyboardAvoidingView>
            </Block>
            
            </ScrollView>
        </Block>
        </Block>
        </Block>
   
    )
}

/*<RenderPicker mediosDePagoList={mediosDePago}/>*/



const styles = StyleSheet.create({

    producto:{
        marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
        flex:1
      },
      container: {
        width: width,
        height: height,
        padding:0
        
      },
    backgroundImageContainer:{
        width:width,
        height:height/1.5
    },
    backgroundImage:{
        width:'100%',
        height:'100%'
       
    },
 

    productCard:{
    
        padding: 0,
        marginHorizontal: theme.SIZES.BASE,
        borderTopLeftRadius: 20,
        height:altura,
        
        borderTopRightRadius: 20,
        backgroundColor: '#FFFFFF',
          
    },
    cardHeader:{
        marginTop:20,
        alignSelf:'center',
        alignContent:'center'
    },
    productNameText:{
            marginLeft:20,
            marginTop:16
    },
    productPrizeText:{
        textAlign:'center',
        marginRight:20,
        marginTop:10
    },
    divider: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#C6C6C6",
      },
    avatarContainer: {
        position: "relative",
        marginTop: 30,
        marginLeft:20
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 0
      },
      duenioText:{
        marginTop: 60,
        marginLeft:20
      },
      descripcionContainer:{
            marginTop:40,
            alignSelf:'center',
            alignItems:'center',
            width:width/2
            
      },
      tituloDescripcion:{
            color:'#707070'
      },
      descripcionLarga:{
            marginTop:20,
            color:'#707070'
      },
      btnRealizarOferta:{
        alignSelf:'center',
        marginTop:60,
        borderRadius:10,
        backgroundColor:'#3483FA'
    
      },
      pickerContainer:{
          alignSelf:'center',
         
          marginTop:30,
          width:250,
          height:50,
          borderRadius:2,
       
          shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        elevation: 3,

      },
      picker:{
          width:250,
          height:50,
          borderRadius:20
      
      },
    
      input2:{
          marginTop:30,
          height:50,
          width:250,
          alignSelf:"center",
          borderRadius:20,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 5,
          shadowOpacity: 0.5,
          elevation: 3,
    
      },
      input: {
        borderWidth: 2,
        marginTop:30,
        width:250,
        height:50,
        alignSelf:'center'
      },
      error: {
        color: 'red',
        marginBottom: 10
      }


})
export default Pujar