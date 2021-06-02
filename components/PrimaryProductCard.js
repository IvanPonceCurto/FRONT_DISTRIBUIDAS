import React from 'react';
import { Image, StyleSheet, Dimensions, Platform,ScrollView,TouchableWithoutFeedback} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 

export default function PrimaryProductCard(props){
    const { navigation,producto,subasta } = props;
    return(
        <Block key={producto.idProducto}>
        <Block style={styles.imageContainer}>
        
            <Image
                style={styles.imagen}
                source={{uri:producto.lightfotos[0].referencia_url}}
              />
        </Block>
        <Text normal size={14} style={{textAlign:'center',marginTop:10}}>{producto.nombreProducto}</Text>

        <Button style={styles.btnVerProducto}>
          <Text size={16} style={{color:'#FFFFFF'}} bold onPress={()=>navigation.navigate('Producto',{subasta,producto})}>Ver Producto</Text>
        </Button>
        <Text bold size={16} style={styles.textoArticulosProximos} >Próximos a Subastar:</Text>
    </Block>
    )
}

const styles = StyleSheet.create({
  
    imageContainer:{
      alignSelf:'center',
      width:300,
      height:150,
      backgroundColor:'#000000',
      borderRadius: 20,
      borderWidth:5,
      borderColor: '#3483FA'
    },
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
  