import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking,ScrollView, View ,TouchableWithoutFeedback} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 
import { Images, argonTheme } from '../constants/';
import { useNavigation } from '@react-navigation/native';
import { HeaderHeight } from "../constants/utils";
import { renderNode } from 'react-native-elements/dist/helpers';
const { height, width } = Dimensions.get('screen');
const zapas = require("../assets/imgs/zapas.jpg")
const auto = require("../assets/imgs/ferrari.jpg")
const reloj = require("../assets/imgs/reloj.jpg")
const wanchope = require("../assets/imgs/wanchope.jpg")
const catalogo = {
                    idSubasta:1234,
                    fecha: '20/05/2021',
                    rematador:'Ivan Ponce',
                    categoriaSubasta:'Platino',
                    colorCategoria:'#15E18E',
                    productos:[
                                {
                                  idProducto:123,
                                  nombreProducto:'Zapatillas Nike',
                                  foto: zapas,
                                  precioBase:'$10000',
                                  duenio:{
                                    nombre:'Wanchope Avila',
                                    foto: wanchope
                                  },
                                  descripcion:'aifnsidmdcicdmsrmsvrsiormvismreisnvrsirnsmrisrnmsirvsnmrsirmsnrisvmnsirmnsndinvufiwime'
                                },
                                {
                                  idProducto:12,
                                  nombreProducto:'Ferrari',
                                  foto:auto,
                                  precioBase:'$10000',
                                  duenio:{
                                    nombre:'Wanchope Avila',
                                    foto: wanchope
                                  },
                                  descripcion:'aifnsidmdcicdmsrmsvrsiormvismreisnvrsirnsmrisrnmsirvsnmrsirmsnrisvmnsirmnsndinvufiwime'
                                },
                                {
                                  idProducto:2,
                                  nombreProducto:"Reloj Rolex",
                                  foto:reloj,
                                  precioBase:'$10000',
                                  duenio:{
                                    nombre:'Wanchope Avila',
                                    foto: wanchope
                                  },
                                  descripcion:'aifnsidmdcicdmsrmsvrsiormvismreisnvrsirnsmrisrnmsirvsnmrsirmsnrisvmnsirmnsndinvufiwime'
                                }

                              ]
                  }




/*FALTA HACER ONCLICK PARA NAVEGAR A CADA PRODUCTO Y VER SU DESCRIPCION*/



class Pro extends React.Component{
  renderProductos = ()=>{
    const { navigation } = this.props
    return(
    
    catalogo.productos.map(producto =>(
      <Block key={producto.idProducto} row style={styles.imageContainerProximos} >
          <TouchableWithoutFeedback  onPress={() => navigation.navigate('Producto',{producto})}>
              <Image
                
                  style={styles.imagen}
                  source={producto.foto}
                />
          </TouchableWithoutFeedback>
          <Text size={14} bold  style={styles.textoArticulosProximos}>{producto.nombreProducto} </Text>
      </Block>
  
    )))
  }
  render(){

    return (
      
        <Block flex style={styles.catalogo}>
          <Block flex>
              <Block style={styles.container,{ backgroundColor:'#EEBB00'}}> 
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ width, marginTop: '25%' }}
                  >
                    <Block flex style={styles.catalogoCard}>
                      <Block style={styles.cardHeader}>
                        <Text size={20} style={{textAlign:'center',fontWeight:'bold',marginTop:10}}>Subasta Nro: {catalogo.idSubasta}</Text>
                        <Text style = {{marginTop:15,marginLeft:20}}>Fecha: {catalogo.fecha}</Text>
                        <Block row space="between">
                          <Text style = {{marginTop:10,marginLeft:20}}>Rematador: {catalogo.rematador}</Text>
                          <Block style={styles.rectanguloCategoria}>
                            <Text size={12} color={argonTheme.COLORS.WHITE} bold>{catalogo.categoriaSubasta}</Text>
                          </Block>

                        </Block>
                      </Block>
                      <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                        <Block style={styles.divider} />
                      </Block>
                      <Block style={styles.cardBody}>
                       
                          <Text bold size={16} style={styles.subastaActual}>Subastandose Actualmente</Text>
                          <Block style={styles.imageContainer}>
                              <Image
                                  style={styles.imagen}
                                  source={catalogo.productos[0].foto}
                                />
                          </Block>
                          <Text normal size={14} style={{textAlign:'center',marginTop:10}}>{catalogo.productos[0].nombreProducto}</Text>
                    
                          <Button style={styles.btnVerProducto}>
                            <Text size={16} style={{color:'#FFFFFF'}} bold>Ver Producto</Text>
                          </Button>
                          <Text bold size={16} style={styles.textoArticulosProximos}>Próximos a Subastar:</Text>
                         {this.renderProductos()}
                          
                      </Block>
                    </Block>
                </ScrollView>
              </Block>
          </Block>
        </Block>
       
    
    );
  }
}
const styles = StyleSheet.create({
  catalogo:{
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    flex:1
  },
  container: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
    
  },
  catalogoBackground: {
    width: width,
    height: height / 2
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },

  catalogoCard:{
    padding: 0,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 100,
    borderTopLeftRadius: 10,
    height:height,
    borderTopRightRadius: 10,
    backgroundColor: '#FFFFFF',
   
  },
  cardHeader:{  
      height: height/8,
      marginTop:0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor:'#FFFFFF',
   
     
      

  },
  rectanguloCategoria:{
    backgroundColor: catalogo.colorCategoria,
    width:60,
    alignItems:'center',
    borderRadius:50,
    marginRight:30,
    height:20,
    marginTop:10
  
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#C6C6C6",
  },
  cardBody:{
    height:height,
    backgroundColor:'#FFFFFF'

  },
  subastaActual:{
    
    textAlign: 'center',
    marginBottom:20
  },
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


export default Pro;