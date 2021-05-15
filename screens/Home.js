import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import DropDownPicker from 'react-native-dropdown-picker';
import { Card } from '../components';
import articles from '../constants/articles';
import { Header } from 'react-native/Libraries/NewAppScreen';
const { width } = Dimensions.get('screen');
const zapas = require("../assets/imgs/zapas.jpg")
const auto = require("../assets/imgs/ferrari.jpg")
const reloj = require("../assets/imgs/reloj.jpg")
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
]


class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      value: null,
      items: [
        {label: 'Plantino', value: 'apple'},
        {label: 'Oro', value: 'banana'}
      ]
    };

    this.setValue = this.setValue.bind(this);

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


  renderArticles = () => {
    const { open, value, items } = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
         <DropDownPicker
            open = {open}
            value={value}
            items = {items}
            setOpen = {this.setOpen}  
            setValue={this.setValue}
            setItems = {this.setItems}
        />
        {subastas.map(subasta =>{
            return <Card key={subasta.idSubasta} item={subasta} horizontal/>

        })}
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
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
});

export default Home;
