import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import DropDownPicker from 'react-native-dropdown-picker';
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

  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      value: null,
      items: [
          {
              label:'Platino',
              value:'platino'
            },
            {
              label:'Oro',
              value:'oro'
            },
            {
              label:'Plata',
              value:'plata'
            }
          ]
    };

    this.setValue = this.setValue.bind(this);
    this.setOpen = this.setOpen.bind(this);
    this.setItems = this.setItems.bind(this);
  }

  setOpen(open) {
    this.setState({
      open
    });
  }

  setValue(callback) {
    this.setState(state => ({
      value: callback(state.value)
    }));
  }

  setItems(callback) {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }

  render() {
    const { open, value, items } = this.state;
    return (
      <Block flex center style={styles.home}>
      
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block>
        
         
        <DropDownPicker
               multiple={true}
                open={open}
                value={value}
                items={items}
                setOpen={this.setOpen}
                setValue={this.setValue}
                setItems={this.setItems}
                
           /> 
      
          
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
