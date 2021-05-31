import React from 'react';
import { Image, StyleSheet, Dimensions, Platform,ScrollView,TouchableWithoutFeedback} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 
import {argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";

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




/*FALTA HACER ONCLICK PARA NAVEGAR A CADA PRODUCTO Y VER SU DESCRIPCION*/



class Pro extends React.Component{
  constructor(props){
    super(props);
    this.state= subasta.productos[0]
  }

  renderProductos(){
    const {route, navigation } = this.props
    var subasta = route.params.item
    
    return(
      <Block style={styles.cardBody}>
        <Text bold size={16} style={styles.subastaActual}>Subastandose Actualmente</Text>
        <Block style={styles.imageContainer}>
            <Image
                style={styles.imagen}
                source={this.state.fotos[0]}
              />
        </Block>
        <Text normal size={14} style={{textAlign:'center',marginTop:10}}>{this.state.nombreProducto}</Text>

        <Button style={styles.btnVerProducto}>
          <Text size={16} style={{color:'#FFFFFF'}} bold onPress={() => navigation.navigate('Producto',{subasta,producto: this.state})}>Ver Producto</Text>
        </Button>
        <Text bold size={16} style={styles.textoArticulosProximos}>Próximos a Subastar:</Text>
          {subasta.productos.map(producto =>{
            if(producto.idProducto!=this.state.idProducto){
              return(
                <Block key={producto.idProducto} row style={styles.imageContainerProximos} >
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Producto',{subasta,producto})} /*onPress={this.setState({ state: producto })}*/>
                      
                        <Image
                          
                            style={styles.imagen}
                            source={producto.fotos[0]}
                          />
                    </TouchableWithoutFeedback>
                    <Text size={14} bold  style={styles.textoArticulosProximos}>{producto.nombreProducto} </Text>
                </Block>
              )}
          })}
    </Block>
    )
}
  


  render(){
        const {route, navigation } = this.props
      
        var subasta2 = route.params.item
        //DE SUBASTA 2 SACARIA EL ID, Y LE PEGARIA AL ENDPOINT DE CATALOGO PARA TRAERME EL OBJETO "SUBASTA" QUE TENGO MAS ARRIBA
       
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
                          <Text style = {{marginTop:10,marginLeft:20}}>Rematador: {subasta.rematador}</Text>
                          <Block style={styles.rectanguloCategoria}>
                            <Text size={12} color={argonTheme.COLORS.WHITE} bold>{subasta.categoriaSubasta}</Text>
                          </Block>

                        </Block>
                      </Block>
                      <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                        <Block style={styles.divider} />
                      </Block>
                      
                       
                         
                         {this.renderProductos()}
                          
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
    backgroundColor:subasta.colorCategoria,
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
