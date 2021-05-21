import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../components';

const { width } = Dimensions.get('screen');
const zapas = require("../assets/imgs/zapas.jpg")
const auto = require("../assets/imgs/ferrari.jpg")
const reloj = require("../assets/imgs/reloj.jpg")
const reloj2 = require("../assets/imgs/reloj2.jpg")
const reloj3 = require("../assets/imgs/reloj3.jpg")
const wanchope = require("../assets/imgs/wanchope.jpg")
const subastas = [
                    {
                      idSubasta:1,
                      fecha:'15/05/2021',
                      categoriaSubasta:'Platino',
                      rematador:'Ivan Ponce',
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
                    },
                    {
                      idSubasta:2,
                      fecha:'15/05/2021',
                      categoriaSubasta:'Plata',
                      rematador:'Ivan Ponce',
                      colorCategoria:'#ADADAD',
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
                    },
                    {
                      idSubasta:3,
                      fecha:'15/05/2021',
                      categoriaSubasta:'Oro',
                      rematador:'Ivan Ponce',
                      colorCategoria:'#C8DF00',
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
                    },
                    {
                      idSubasta:4,
                      fecha:'15/05/2021',
                      categoriaSubasta:'Oro',
                      rematador:'Ivan Ponce',
                      colorCategoria:'#C8DF00',
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
                    },
                    {
                      idSubasta:5,
                      fecha:'15/05/2021',
                      categoriaSubasta:'Oro',
                      rematador:'Ivan Ponce',
                      colorCategoria:'#C8DF00',
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
                    },
                    {
                      idSubasta:6,
                      fecha:'15/05/2021',
                      categoriaSubasta:'Oro',
                      rematador:'Ivan Ponce',
                      colorCategoria:'#C8DF00',
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
]


class Home extends React.Component {

 
  render() {
    
    return (
      <Block flex center style={styles.home}>
      
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block>
        
    
      
          
          {subastas.map(subasta =>{
              return <Card key={subasta.idSubasta} item={subasta} horizontal/>

          })}
         
        </Block>
      </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  dropDownContainer:{
    marginBottom:10
  }
  
});

export default Home;
