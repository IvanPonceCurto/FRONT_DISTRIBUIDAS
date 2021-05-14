import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking,ScrollView, View } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 
import {Card} from '../components/Card'
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
const { height, width } = Dimensions.get('screen');

const altura = height - height*0.20
class Producto extends React.Component{

    renderProducto = () =>{
        const {route,navigation} = this.props;
        const producto = route.params
        console.log(producto)
        console.log(producto.producto.foto)
        return(
        
            <Block flex style={styles.producto}>
            <Block flex>
              <Block style={styles.container}>
                <Block style={styles.backgroundImageContainer}>
                    <Image  source={producto.producto.foto} style={styles.backgroundImage}/>
                </Block>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{ width, marginTop: '-20%',marginBottom:'-15%' }}
                >
                <Block flex style={styles.productCard}>
                    <Block row space="between" style={styles.cardHeader}>
                        <Text size={25} style={styles.productNameText}>{producto.producto.nombreProducto}</Text>
                        <Text size={30} style={styles.productPrizeText}>{producto.producto.precioBase}</Text>
                    </Block>
                    <Block middle style={{ marginTop: 30}}>
                        <Block style={styles.divider} />
                    </Block>
                    <Block row>
                            <Block  style={styles.avatarContainer}>
                                <Image
                                    source={producto.producto.duenio.foto}
                                    style={styles.avatar}
                                />
                        </Block>
                        <Text size={20} style={styles.duenioText}>Dueño: {producto.producto.duenio.nombre}</Text>
                    </Block>
                    <Block style={styles.descripcionContainer}>
                        <Text size={20} bold style={styles.tituloDescripcion}>Descripcion</Text>
                        <Text style={styles.descripcionLarga}>{producto.producto.descripcion}</Text>
                        <Text style={styles.descripcionLarga}>fmsfmsfosmfsofmsfosmfosfmsofsmfosfmsofmsfosmfsofmsfosfmsofmsfosmfsofmsfosfmsofmsfsfmosfmsfosmfosfmsfosmfsofmsfosmfsofmsfosfmsfomfmsofmsfomsfo</Text>
                    </Block>
                </Block>
                </ScrollView>
            </Block>
            </Block>
            </Block>
       
        )
    }


    render(){

        
    
        return(
            <Block>
                {this.renderProducto()}
            </Block>
        )
    }
}


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
        marginTop:20
    },
    productNameText:{
            marginLeft:20,
            marginTop:16
    },
    productPrizeText:{
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
      }
})
export default Producto