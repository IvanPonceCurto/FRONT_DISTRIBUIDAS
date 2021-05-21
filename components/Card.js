import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { argonTheme } from '../constants';


class Card extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle, } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];


    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Catalogo',{item})}>
          <Block row={horizontal}  style={imgContainer}>
         
            <Image  source={item.productos[0].fotos[0]} style={imageStyles} /> 
           
            <Block style={{width:'100%'}}>         
            <Image source={item.productos[1].fotos[0]} style={styles.secondaryImages} />
            <Image source={item.productos[2].fotos[0]} style={styles.secondaryImages} />
            </Block>

          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Catalogo',{item})}>
          <Block flex space="between" style={styles.cardDescription}>
            <Block>
                <Text size={14} style={styles.cardTitle}>Subasta N°{item.idSubasta}</Text>
                <Text size={12}>Fecha: {item.fecha}</Text>
                <Text size={12}>Rematador: {item.rematador}</Text>
            </Block>
            <Block row={horizontal} space="between">
            <Block style={{ backgroundColor:item.colorCategoria,
                            width:80,
                            alignItems:'center',
                            borderRadius:50}}>
            <Text size={12} muted={!ctaColor} color={argonTheme.COLORS.WHITE} bold>{item.categoriaSubasta}</Text>
            </Block>
            <Block style={styles.rectangulo}>
            <Text size={12} muted={!ctaColor} color={argonTheme.COLORS.WHITE} bold>Ver Catálogo</Text>
            </Block>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  rectanguloCategoria:{
    backgroundColor:'#000000',
    width:80,
    alignItems:'center',
    borderRadius:50
  
  },
  rectangulo:{
    backgroundColor: '#3483FA',
    width:80,
    alignItems:'center',
    borderRadius:50
  
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
    width:180,
    height:120
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: '50%',
  },
  secondaryImages:{
    width:'50%',
    height:'50%'
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(Card);