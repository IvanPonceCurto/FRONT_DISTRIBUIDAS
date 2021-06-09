import React,{useState} from 'react';
import { Image, StyleSheet, Dimensions, Platform,ScrollView,TouchableWithoutFeedback} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 
import {argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import PrimaryProductCard from '../components/PrimaryProductCard';
import SecondaryProductCard from '../components/SecondaryProductCard';
const { height, width } = Dimensions.get('screen');
const zapas = require("../assets/imgs/zapas.jpg")
const auto = require("../assets/imgs/ferrari.jpg")
const reloj = require("../assets/imgs/reloj.jpg")
const reloj2 = require("../assets/imgs/reloj2.jpg")
const reloj3 = require("../assets/imgs/reloj3.jpg")
const wanchope = require("../assets/imgs/wanchope.jpg")

const subasta = {
                    idSubasta:1234,
                    fecha: '2021-12-23 04:00:45',
                    rematador:'Ivan Ponce',
                    categoriaSubasta:'Platino',
                    colorCategoria:'#15E18E',
                    productos:[
                                {
                                  idProducto:123,
                                  nombreProducto:'Zapatillas Nike',
                                  fotos: [zapas,auto,reloj],
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
                                  fotos: [auto,zapas,reloj],
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
                                  fotos: [reloj,reloj2,reloj3],
                                  precioBase:'$10000',
                                  duenio:{
                                    nombre:'Wanchope Avila',
                                    foto: wanchope
                                  },
                                  descripcion:'aifnsidmdcicdmsrmsvrsiormvismreisnvrsirnsmrisrnmsirvsnmrsirmsnrisvmnsirmnsndinvufiwime'
                                }

                              ]
                  }




//COSAS A HACER EN LA PANTALLA:
//falta hacer join de la subasta con personas 
//falta un poquito de mejora en lo visual

export default function Pro({route,navigation}){
 
  var subasta = route.params.item
  const[productoActual,setProductoActual] = useState(subasta.catalogo.productos[0])
  const[selected, setSelected] = useState({});

  
   
       
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
                        <Text size={20} style={{textAlign:'center',fontWeight:'bold',marginTop:10}}>Subasta Nro: {subasta.idSubasta}</Text>
                        <Text style = {{marginTop:15,marginLeft:20}}>Fecha: {subasta.fecha}</Text>
                        <Block row space="between">
                          <Text style = {{marginTop:10,marginLeft:20}}>Rematador: {subasta.id_subastador}</Text>
                          <Block style={styles.rectanguloCategoria}>
                            <Text size={12} color={argonTheme.COLORS.WHITE} bold>{subasta.categoria}</Text>
                          </Block>

                        </Block>
                      </Block>
                      <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                        <Block style={styles.divider} />
                      </Block>
                      <Block style={styles.cardBody}>
                        <Text bold size={16} style={styles.subastaActual}>Subastandose Actualmente</Text>
                          {subasta.catalogo.productos.map(producto =>{
                            if(producto.idProducto === subasta.catalogo.productos[0].idProducto){
                              return(
                                <PrimaryProductCard navigation={navigation} producto={producto} subasta={subasta}/>
                              )
                            }
                            else{
                              return(
                                    <SecondaryProductCard navigation={navigation} producto={producto} subasta={subasta}/>
                              )}
                          })}
                    </Block>
                       
                         
                        
                          
                      </Block>
                
                </ScrollView>
              </Block>
          </Block>
        </Block>
       
    
    );
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
    backgroundColor:'#000000',
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


