import React from 'react';
import { Image, StyleSheet, Dimensions, Platform,ScrollView,TouchableWithoutFeedback} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 

export default function SecondaryProductCard(props){
    const { navigation,producto,subasta } = props;
    return(
        <Block key={producto.idProducto} row style={styles.imageContainerProximos} >
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('Producto',{subasta,producto})}>
          
            <Image
                onPress={()=>{navegar(navigation,subasta,producto)}}
                style={styles.imagen}
                source={{uri:producto.lightfotos[0].referencia_url}}
              />
        </TouchableWithoutFeedback>
        <Text size={14} bold  style={styles.textoArticulosProximos}>{producto.descripcion} </Text>
    </Block>
    )
}

const styles = StyleSheet.create({
    
    imagen:{
      width:'100%',
      height:'100%',
      borderRadius:20
  
    },
    subastaProxima:{
      marginLeft:20,
      marginTop:50,
      color:'#818181'
    },
    imageContainerProximos:{
      marginLeft:20,
      marginTop:20,
      width:200,
      height:100,
      backgroundColor:'#000000',
      borderRadius: 20,
    
    },
    textoArticulosProximos:{
      textAlignVertical:'center',
      marginLeft:20,
      color:'#818181',
      marginTop:20
    },
    btnVerProducto:{
      alignSelf:'center',
      marginTop:20,
      borderRadius:10,
      backgroundColor:'#3483FA'
  
    }
  });
  